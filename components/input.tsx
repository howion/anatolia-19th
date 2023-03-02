import React from 'react'

interface SelectOption {
    value: any
    label: text
}

interface InputProps {
    type: 'text' | 'textarea' | 'select'
    options?: SelectOption[]
    placeholder?: text
    label?: text
    optional?: boolean
    defaultValue?: text | number | SelectOption['value']
    // value?: text
}

export function Input(props: InputProps): FCReturn<InputProps> {
    return (
        <div className="ma-input-container">
            <label>
                {props.label}
                {/* {props.optional ? undefined : ' *'} */}
            </label>
            {props.type === 'textarea' ? (
                <textarea
                    className="ma-input ma-input-textarea"
                    placeholder={props.placeholder}
                    defaultValue={props.defaultValue}
                />
            ) : undefined}
            {props.type === 'text' ? (
                <input
                    type="text"
                    className="ma-input"
                    placeholder={props.placeholder}
                    defaultValue={props.defaultValue}
                />
            ) : undefined}
            {props.type === 'select' ? (
                <select>
                    {props.options!.map((v, i) => (
                        <option key={i} value={v.value} selected={v.value === props.defaultValue}>
                            {v.label}
                        </option>
                    ))}
                </select>
            ) : undefined}
        </div>
    )
}
