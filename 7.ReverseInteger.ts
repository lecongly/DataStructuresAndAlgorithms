function reverse(x: number): number {
  return Number(String(Math.abs(x)).split("").reverse().join("")) > 2 ** 31
    ? 0
    : (x > 0 ? 1 : -1) *
        Number(String(Math.abs(x)).split("").reverse().join(""));
}
