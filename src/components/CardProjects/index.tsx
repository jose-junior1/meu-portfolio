import { Project } from '../../data/Projects'

import externalLink from '../../assets/img/icons/external-link.png'

import * as S from './styles'
import { useState } from 'react'

const CardProjects = ({ title, target, img, isDevelopment, isRefactored, stacks }: Project) => {
    const [animationState, setAnimationState] = useState<"hidden" | "visible" | "hiding">("hidden")

    const showStacks = () => {
        setAnimationState('visible')
    }

    const hiddenSkills = () => {
        setAnimationState('hiding')
        setTimeout(() => setAnimationState('hidden'), 400)
    }

    return (
        <S.Card style={{ backgroundImage: `url(${img})` }} title={`${title}`}>
            <S.CardLink
                href={target}
                target="_blank"
                rel="noopener noreferrer"
                title={`Ir para ${title}`}
            >
                <p>
                    {title}
                    {' '}
                    {isDevelopment && <i>- (Em andamento)</i>}
                    {isRefactored && <strong><i>- (Refatorado)</i></strong>}
                </p>
                <img src={externalLink} alt="Link externo" />
            </S.CardLink>
            <S.BtnStacks
                type="button"
                onClick={showStacks}
                className={animationState}
                title='Clique aqui para ver as stacks'
            >
                Ver Stacks
            </S.BtnStacks>
            <S.Stacks className={animationState}>
                {stacks.map((stack, index) => (
                    <S.StackTag key={index} stack={stack}>
                        {stack}
                    </S.StackTag>
                ))}
                <button
                    type='button'
                    onClick={hiddenSkills}
                    title='Ocultar stacks'
                >
                    X
                </button>
            </S.Stacks>
        </S.Card>

    )

}

export default CardProjects