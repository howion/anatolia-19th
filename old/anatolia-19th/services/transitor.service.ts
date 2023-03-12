import { Subject } from 'rxjs'
import { Service } from '/services/service'
import { ClientUtil } from '/utils/client.util'

export class TransitorService implements Service<boolean> {
    protected static subject = new Subject<boolean>() // isActive

    public static showTransitor(): void {
        ClientUtil.hideBodyScroll()
        TransitorService.subject.next(true)
    }

    public static async hideTransitor(timeout = 300): Promise<void> {
        setTimeout(() => {
            ClientUtil.showBodyScroll()
            TransitorService.subject.next(false)
        }, timeout)
    }

    public static subscribe(callback: (hidden: boolean) => void): void {
        TransitorService.subject.asObservable().subscribe(callback)
    }
}
