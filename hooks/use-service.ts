import type { Service } from '/services/service'
import { useState } from 'react'

export function useService<T>(service: Service<T>, initial: T): T {
    const [obj, dispatch] = useState<T>(initial)
    const [didSub, setDidSub] = useState(false)

    if (!didSub) {
        setDidSub(true)
        if (service) {
            service.subscribe(dispatch)
        }
    }

    return obj
}
