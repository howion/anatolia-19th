import React from 'react'
import { useService } from '/hooks/use-service'
import { TransitorService } from '/services/transitor.service'

export function Transitor(): FCReturn {
    const isActive = useService<boolean>(TransitorService, false)

    return (
        <div id="ma-transitor" className={isActive ? 'active' : undefined}>
            <div className="ma-transitor-tile" />
            <div className="ma-transitor-tile" />
            <div className="ma-transitor-tile" />
            <div className="ma-transitor-tile" />
            <div className="ma-transitor-tile" />
        </div>
    )
}
