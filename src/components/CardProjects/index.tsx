import { Project } from '../../mocks/Projects'

import externalLink from '../../assets/img/icons/external-link.png'

import * as S from './styles'

const CardProjects = ({ title, target, img, isDevelopment }: Project) => {
    return (
        <S.Card style={{backgroundImage: `url(${img})`}} title={`${title}`}>
            <S.CardLink
                href={target}
                target="_blank"
                rel="noopener noreferrer"
                title={`Ir para ${title}`}
            >
                <p>
                    {title}
                    {' '}
                    {isDevelopment && <i>(Em andamento)</i>}
                </p>
                <img src={externalLink} alt="Link externo" />
            </S.CardLink>
        </S.Card>

    )

}

export default CardProjects