export class ClientUtil {
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
