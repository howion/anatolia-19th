import { Subject } from 'rxjs'
import { Service } from '/services/service'
import { ClientUtil } from '/utils/client.util'

export class LoadingService implements StaticImplements<Service<boolean>, typeof LoadingService> {
    protected static subject = new Subject<boolean>() // isActive

    public static set(status: boolean): void {
        ClientUtil.hideBodyScroll()
        LoadingService.subject.next(status)
    }

    public static subscribe(callback: (hidden: boolean) => void): void {
        LoadingService.subject.asObservable().subscribe(callback)
    }
}
