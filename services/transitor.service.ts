import type { Service } from '/services/service'
import { Subject } from 'rxjs'
import { hideBodyScroll, showBodyScroll } from '/utils/client.util'

// biome-ignore lint/complexity/noStaticOnlyClass: -
export class TransitorService implements StaticImplements<Service<boolean>, typeof TransitorService> {
    protected static subject = new Subject<boolean>() // isActive

    public static showTransitor(): void {
        hideBodyScroll()
        TransitorService.subject.next(true)
    }

    public static async hideTransitor(timeout = 300): Promise<void> {
        setTimeout(() => {
            showBodyScroll()
            TransitorService.subject.next(false)
        }, timeout)
    }

    public static subscribe(callback: (hidden: boolean) => void): void {
        TransitorService.subject.asObservable().subscribe(callback)
    }
}
