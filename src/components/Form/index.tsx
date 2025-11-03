import { useState } from 'react'
import emailjs from '@emailjs/browser'

import * as S from './styles'

const Form = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [textMessage, setTextMessage] = useState('')
    const [successfulMessage, setSuccessfulMessage] = useState('')
    const [loading, setLoading] = useState(false)

    const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID
    const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
    const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        setSuccessfulMessage('')

        if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
            setSuccessfulMessage('Erro de configuração: Chaves da API ausentes.')
            console.error('EmailJS Error: Uma ou mais chaves (Service ID, Template ID, Public Key) não foram carregadas do .env.')
            return
        }

        setLoading(true)

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
                <label htmlFor="name">Nome<b>*</b></label>
                <input
                    id="name"
                    type="text"
                    placeholder="Insira seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onFocus={() => setSuccessfulMessage('')}
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
                <button className='disabled' type="submit" disabled>Enviar</button>
            ) : (
                <button type="submit">Enviar</button>
            )}
        </S.FormContact>
    )
}

export default Form