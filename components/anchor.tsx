import { useRouter } from 'next/router'
import Link from 'next/link'
import { TransitorService } from '/services/transitor.service'

interface AnchorProps {
    className?: text
    href: text
    animate?: boolean
    children: any
    prefetch?: boolean | null
}

export function Anchor(props: AnchorProps): FCReturn<AnchorProps> {
    const router = useRouter()

    return (
        <Link
            href={props.href}
            className={props.className}
            prefetch={props.prefetch}
            onClick={(e) => {
                if (props.animate) {
                    e.preventDefault()
                    TransitorService.showTransitor()
                    if (router.asPath === props.href) {
                        setTimeout(() => {
                            if (router.pathname === props.href) {
                                return router.reload()
                            } else {
                                router.push(props.href)
                            }

                            window.location.reload()
                        }, 1500)
                    } else {
                        setTimeout(() => {
                            if (router.pathname === props.href) {
                                return router.reload()
                            } else {
                                router.push(props.href)
                            }
                        }, 1500 + 500) // 500ms extra
                    }
                }
            }}
        >
            {props.children}
        </Link>
    )
}
