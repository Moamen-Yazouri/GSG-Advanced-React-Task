export const distructIds = (urls: string[]) => {
    const ids = urls
    .map((url) => url.split("/").pop())
    .filter(Boolean)
    .join(",");
    return Array.isArray(ids) ? ids : [ids];
}