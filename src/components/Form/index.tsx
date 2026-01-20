import { useState } from 'react'
import emailjs from '@emailjs/browser'

import * as S from './styles'

const API_KEY = process.env.REACT_APP_ABSTRACT_API_KEY

const checkEmailValidity = async (email: string) => {
    if (!API_KEY) {
        console.error('AbstractAPI não configurada!')
        return { valid: true }
    }

    const url = `https://emailvalidation.abstractapi.com/v1/?api_key=${API_KEY}&email=${encodeURIComponent(email)}`

    try {
        const response = await fetch(url)

        if (!response.ok) {
            console.error('Erro HTTP da AbstractAPI:', response.status)

            return { valid: true }
        }

        const data = await response.json()

        if (data.is_valid_format.value === false) {
            return { valid: false, reason: 'E-mail em formato inválido. Verifique o @ e o domínio.' }
        }

        if (data.is_disposable_email.value === true) {
            return { valid: false, reason: 'E-mail descartável (temporário) não permitido.' }
        }

        if (data.deliverability !== 'DELIVERABLE') {
            return { valid: false, reason: 'E-mail inválido ou impossível de entregar.' }
        }

        return { valid: true }
    } catch (error) {
        console.error('Erro na validação da AbstractAPI (Rede/Parse):', error)

        return { valid: true }
    }
}

const Form = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [textMessage, setTextMessage] = useState('')
    const [successfulMessage, setSuccessfulMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [userNameError, setUserNameError] = useState(false)

    const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID
    const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
    const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        setSuccessfulMessage('')
        setUserNameError(false)

        if (name.length < 4) {
            setUserNameError(true)
            return
        } 
        
        if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
            setSuccessfulMessage('Erro de configuração: Chaves da API ausentes.')
            console.error('EmailJS Error: Uma ou mais chaves (Service ID, Template ID, Public Key) não foram carregadas do .env.')
            return
        } 
        
        setLoading(true)

        const emailCheck = await checkEmailValidity(email)

        if(!emailCheck.valid) {
            setSuccessfulMessage(emailCheck.reason || 'Erro na validação do e-mail.')
            setLoading(false)
            return
        }

        const templateParams = {
            from_name: name,
            email: email,
            message: textMessage
        }

        emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            templateParams,
            PUBLIC_KEY
        )
            .then(() => {
                setSuccessfulMessage('Mensagem enviada com sucesso! Em breve responderei.')
                setName('')
                setEmail('')
                setTextMessage('')
            })
            .catch(() => {
                setSuccessfulMessage('Erro ao enviar mensagem. Por favor tente novamente ou use o cartão do WhatsApp.')
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <S.FormContact onSubmit={handleSubmit}>
            <S.BlockContact>
                <div>
                    <label htmlFor="name">Nome<b>*</b></label>
                    {userNameError && (
                        <small className='error-message'>
                            O nome precisa ter mais de 3 caracteres!
                        </small>
                    )}
                </div>
                <input
                    id="name"
                    type="text"
                    placeholder="Insira seu nome"
                    className={userNameError ? 'input-error' : undefined}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onFocus={() => [setSuccessfulMessage(''), setUserNameError(false)]}
                    required
                />
            </S.BlockContact>
            <S.BlockContact>
                <label htmlFor="email">E-mail<b>*</b></label>
                <input
                    id="email"
                    type="email"
                    placeholder="Insira seu e-mail ex.: exemplo@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setSuccessfulMessage('')}
                    required
                />
            </S.BlockContact>
            <S.BlockContact>
                <label htmlFor="text-message">Mensagem<b>*</b></label>
                <textarea
                    id="text-message"
                    placeholder="Insira sua mensagem aqui"
                    value={textMessage}
                    onChange={(e) => setTextMessage(e.target.value)}
                    onFocus={() => setSuccessfulMessage('')}
                    required
                />
            </S.BlockContact>
            {loading ? (
                <small className='sending'>Enviando...</small>
            ) : (
                <small className='success-message'>{successfulMessage}</small>
            )}
            {loading ? (
                <button className='disabled' type="submit" title='Enviando mensagem...' disabled>Enviando...</button>
            ) : (
                <button type="submit" title='Clique para enviar sua mensagem'>Enviar</button>
            )}
        </S.FormContact>
    )
}

export default Form