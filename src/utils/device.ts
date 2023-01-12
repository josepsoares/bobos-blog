/**
 * https://github.com/rodneylab/sveltekit-share-buttons/blob/main/src/lib/utilities/device.js
 * returns true if the device is thought to be a mobile or tablet
 */
export function isMobileDevice() {
  return /(android|iphone|ipad|mobile)/i.test(navigator.userAgent);
}
