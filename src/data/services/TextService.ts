export const TextService = {
  limitSizeText(text: string, maxSizeText: number): string {
    if (text.length < maxSizeText) {
      return text
    }
    return text.slice(0, maxSizeText) + "..."
  }
}