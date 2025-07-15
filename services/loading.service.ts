import type { Service } from '/services/service'
import { Subject } from 'rxjs'

// biome-ignore lint/complexity/noStaticOnlyClass: -
export class LoadingService implements StaticImplements<Service<boolean>, typeof LoadingService> {
    protected static subject = new Subject<boolean>() // isActive

    public static set(status: boolean): void {
        LoadingService.subject.next(status)
    }

    public static subscribe(callback: (hidden: boolean) => void): void {
        LoadingService.subject.asObservable().subscribe(callback)
    }
}
