/** URL de la app principal (onboarding). Configurable vía VITE_APP_URL */
export const APP_URL = import.meta.env.VITE_APP_URL ?? "https://sato-agro.netlify.app/"

export function isExternalUrl(url: string) {
  return url.startsWith("http://") || url.startsWith("https://")
}
