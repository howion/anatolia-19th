import { Emblem } from './emblem'
import { useService } from '/hooks/use-service'
import { TransitorService } from '/services/transitor.service'

export function Transitor(): FCReturn {
    const isActive = useService<boolean>(TransitorService, false)

    return (
        <div
            id="ma-transitor"
            className={isActive ? 'active' : undefined}
            // onClick={() => isActive ? TransitorService.hideTransitor(0) : TransitorService.showTransitor()}
        >
            <Emblem h={96} textFill="#ffffff" />
            <div className="ma-transitor-tile" />
            <div className="ma-transitor-tile" />
            <div className="ma-transitor-tile" />
            <div className="ma-transitor-tile" />
            <div className="ma-transitor-tile" />
        </div>
    )
}
