export const PatternsMisc = {
    username: /^[\dA-Za-z]([._-](?![._-])|[\dA-Za-z]){3,18}[\dA-Za-z]$/,
    nonemptyText: /^(?!\s*$).+/,
    kebabCase: /^([a-z][\da-z]*)(-[\da-z]+)*$/,
    lowerCamelCase: /^[a-z][\dA-Za-z]+$/,
    upperCamelCase: /^[A-Z][\dA-Za-z]+$/,
    snakeCase: /^[\da-z]+(?:_[\da-z]+)*$/
} as const

export const Patterns = {
    user: {
        username: PatternsMisc.username
    },
    branch: {
        code: PatternsMisc.kebabCase
    },
    blob: {
        name: PatternsMisc.nonemptyText,
        code: PatternsMisc.kebabCase
    },
    mark: {
        name: PatternsMisc.nonemptyText
    }
} as const
