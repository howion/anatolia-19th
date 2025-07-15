import { forwardRef } from 'react'

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

export const Input = forwardRef((props: InputProps, ref: any) => {
    return (
        <div className="ma-input-container">
            {/** biome-ignore lint/a11y/noLabelWithoutControl: - */}
            <label>
                {props.label}
                {/* {props.optional ? undefined : ' *'} */}
            </label>
            {props.type === 'textarea' ? (
                <textarea
                    ref={ref as React.Ref<HTMLTextAreaElement>}
                    className="ma-input ma-input-textarea"
                    placeholder={props.placeholder}
                    defaultValue={props.defaultValue}
                />
            ) : undefined}
            {props.type === 'text' ? (
                <input
                    ref={ref as React.Ref<HTMLInputElement>}
                    type="text"
                    className="ma-input"
                    placeholder={props.placeholder}
                    defaultValue={props.defaultValue}
                />
            ) : undefined}
            {props.type === 'select' ? (
                <select ref={ref as React.Ref<HTMLSelectElement>}>
                    {props.options!.map((v, i) => (
                        <option key={i} value={v.value} selected={v.value === props.defaultValue}>
                            {v.label}
                        </option>
                    ))}
                </select>
            ) : undefined}
        </div>
    )
})
