export function encodeBase64(str: string): string {
    const utf8Str = unescape(encodeURIComponent(str));
    return btoa(utf8Str);
}

export function decodeBase64(base64Str: string): string {
    const decodedStr = atob(base64Str);
    return decodeURIComponent(escape(decodedStr));
}