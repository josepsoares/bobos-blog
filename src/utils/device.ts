/**
 * https://github.com/rodneylab/sveltekit-share-buttons/blob/main/src/lib/utilities/device.js
 * returns true if the device is thought to be a mobile or tablet
 */
export function isMobileDevice() {
  return typeof window !== "undefined"
    ? /(android|iphone|ipad|mobile)/i.test(window.navigator.userAgent)
    : null;
}
