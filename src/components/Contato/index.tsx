import { ContainerContato, Content } from "./styles"
import wppIcon from "../../assets/img/icons/wpp.png"
import mailIcon from "../../assets/img/icons/mail.png"

const Contato = () => {
    return (
        <ContainerContato id="contato">
            <h2>Vamos <span>conversar?</span></h2>
            <Content>
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
            </Content>
        </ContainerContato>
    )
}

export default Contato