export class ClientUtil {
    public static readonly MAPBOX_PUBLIC_TOKEN =
        'pk.eyJ1IjoiaG93aW9uIiwiYSI6ImNsYjh6b2gycDBia2ozd21nYjh3Y2JmcWUifQ.DE19OL-ugnq3dq66xKjoEw'

    public static readonly MAPBOX_STYLE_MAP = 'mapbox://styles/howion/clbrzux99000p14pmookcim4w'
    public static readonly MAPBOX_STYLE_CONTACT = 'mapbox://styles/howion/clbrzux99000p14pmookcim4w'

    public static isClient = typeof window !== 'undefined'

    public static hideBodyScroll(): void {
        if (window && window.document && window.document.body) {
            window.document.body.style.overflow = 'hidden'
        }
    }

    public static showBodyScroll(overflow = 'overlay'): void {
        if (window && window.document && window.document.body) {
            window.document.body.style.overflow = overflow
        }
    }
}
