// https://stackoverflow.com/a/54029307/14139519

// type should be: Array<Array<any>> or Array<any>;
// but typescript complains about it anyway so it's any anyway 😅

export const chunkArray: any = (arr: any[], size: number) =>
  arr.length > size
    ? [arr.slice(0, size), ...chunkArray(arr.slice(size), size)]
    : [arr];
