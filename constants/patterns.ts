export const PatternsMisc = {
    username: /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/,
    nonemptyText: /^(?!\s*$).+/,
    kebabCase: /^([a-z][a-z0-9]*)(-[a-z0-9]+)*$/,
    lowerCamelCase: /^[a-z][a-zA-Z0-9]+$/,
    upperCamelCase: /^[A-Z][a-zA-Z0-9]+$/,
    snakeCase: /^[a-z0-9]+(?:_[a-z0-9]+)*$/
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
