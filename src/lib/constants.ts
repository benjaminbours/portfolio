export const SITE_NAME = "Benjamin Bours";
export const SITE_URL = "https://bours.dev";
export const BASE_PATH = "/bbblog";
export const HOME_OG_IMAGE_URL = `${SITE_URL}${BASE_PATH}/assets/or_image.svg`;
export const LOCALES = ["en", "fr"];
export const DEFAULT_LOCALE = "en";

// Helper function to prepend base path to asset URLs
export function withBasePath(path: string): string {
  if (!path) return path;
  // Don't add base path if it's already there or if it's an external URL
  if (path.startsWith('http') || path.startsWith(BASE_PATH)) {
    return path;
  }
  return `${BASE_PATH}${path}`;
}
