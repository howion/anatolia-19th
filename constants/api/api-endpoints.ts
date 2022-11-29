export interface ApiEndpoint {
    method: text
    path: text
}

export function makeEndpoint(method: text, path: text): ApiEndpoint {
    return { method, path }
}

export const ApiEndpoints: Record<text, Record<text, ApiEndpoint>> = {
    branches: {
        retrieveAll: makeEndpoint('GET', 'branches')
    },
    marks: {
        retrieveAll: makeEndpoint('GET', 'marks')
    },
    blobs: {
        create: makeEndpoint('POST', 'blobs'),
        retrieveAll: makeEndpoint('GET', 'blobs'),
        retrieve: makeEndpoint('GET', 'blobs/:code'),
        patch: makeEndpoint('PATCH', 'blobs/:code'),
        delete: makeEndpoint('DELETE', 'blobs/:code')
    }
}
