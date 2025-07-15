import { useState } from 'react'
import { useDidMount } from 'rooks'

export interface AccordionProps {
    title: text
    children: any
    active?: boolean
}

export function Accordion(props: AccordionProps): FCReturn<AccordionProps> {
    const [isActive, setIsActive] = useState(false)

    useDidMount(() => {
        if (props.active) setIsActive(true)
    })

    return (
        <div className={`ma-accordion${isActive ? ' active' : ''}`}>
            <div className="ma-accordion-head" onClick={() => setIsActive(!isActive)}>
                <div className="ma-accordion-head-title">{props.title}</div>
                <div className="ma-accordion-head-icon" />
            </div>
            <div className="ma-accordion-content">{props.children}</div>
        </div>
    )
}

export interface AccordionContainerProps {
    children: FCReturn<AccordionProps> | FCReturn<AccordionProps>[]
}

export function AccordionContainer(props: AccordionContainerProps): FCReturn<AccordionContainerProps> {
    return <div className="ma-accordion-container">{props.children}</div>
}
