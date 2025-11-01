export function getScrollTop(element) {
    if (!element) return 0;
    return element.scrollTop || 0;
}