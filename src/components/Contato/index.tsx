import * as S from "./styles"
import wppIcon from "../../assets/img/icons/wpp.png"
import mailIcon from "../../assets/img/icons/mail.png"
import { useState } from "react"

const Contato = () => {
    const [activeView, setActiveView] = useState<'form' | 'cards'>('form')

    const selectForm = () => {
        setActiveView('form')
    }

    const selectCards = () => {
        setActiveView('cards')
    }


    return (
        <S.ContainerContato id="contato">
            <h2>Vamos <span>conversar?</span></h2>
            <S.SelectFormContact>
                <p>
                    Escolha uma forma de contato
                </p>
                <div>
                    <button
                        className={activeView === 'form' ? 'is-active' : undefined}
                        type="button"
                        onClick={selectForm}
                        title="Clique para selecionar formulário"
                    >
                        Formulário
                    </button>
                    <button
                        className={activeView === 'cards' ? 'is-active' : undefined}
                        type="button"
                        onClick={selectCards}
                        title="Clique para selecionar cartões"
                    >
                        Cartões
                    </button>
                </div>
            </S.SelectFormContact>
            {activeView === 'form' ? (
                <S.FormContact>
                    <S.BlockContact>
                        <label htmlFor="name">Nome *</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Insira seu nome"
                            required
                        />
                    </S.BlockContact>
                    <S.BlockContact>
                        <label htmlFor="email">E-mail *</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Insira seu e-mail ex.: exemplo@gmail.com"
                            required
                        />
                    </S.BlockContact>
                    <S.BlockContact>
                        <label htmlFor="text-message">Mensagem*</label>
                        <textarea
                            id="text-message"
                            placeholder="Insira sua mensagem aqui"
                            required
                        />
                    </S.BlockContact>
                    <button type="submit">Enviar</button>
                </S.FormContact>
            ) : (
                <S.Content>
                    <a
                        href="https://wa.me/5511996411760"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Conversar no Whatsapp (11)99641-1760"
                    >
                        <img src={wppIcon} alt="WhatsApp" />
                        (11) 99641-1760
                    </a>
                    <a
                        href="https://wa.me/5511995937268"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Conversar no Whatsapp (11)99593-7268"
                    >
                        <img src={wppIcon} alt="WhatsApp" />
                        (11) 99593-7268
                    </a>
                    <a
                        href="mailto:jose.j.j.silva634@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Enviar email para jose.j.j.silva634@gmail.com"
                    >
                        <img src={mailIcon} alt="WhatsApp" />
                        jose.j.j.silva634@gmail.com
                    </a>
                </S.Content>
            )}
        </S.ContainerContato>
    )
}

export default Contato