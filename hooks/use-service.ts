import { useState } from 'react'
import { Service } from '/services/service'

export function useService<T>(service: Service<T>, initial: T): T {
    const [obj, dispatch] = useState<T>(initial)
    const [didSub, setDidSub] = useState(false)

    if (!didSub) {
        setDidSub(true)
        ;(service as any).subscribe(dispatch)
    }

    return obj
}
