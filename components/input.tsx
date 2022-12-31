import React from 'react'

interface InputProps {
    type: 'text' | 'textarea'
    placeholder?: text
    label: text
    optional?: boolean
    // value?: text
}

export function Input(props: InputProps): FCReturn<InputProps> {
    return (
        <div className="ma-input-container">
            <label>{props.label}{props.optional ? undefined : ' *'}</label>
            {props.type === 'textarea' ? (
                <textarea
                    className="ma-input ma-input-textarea"
                    placeholder={props.placeholder}
                />
            ) : undefined}
            {props.type === 'text' ? (
                <input
                    type="text"
                    className="ma-input"
                    placeholder={props.placeholder}
                />
            ) : undefined}
        </div>
    )
}
