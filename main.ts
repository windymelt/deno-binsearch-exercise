export const binSearch = (tgt: number) => {
  const loop: (xs: Array<number>) => number | null | undefined = (xs: Array<number>) => {
    if (xs.length === 0) return null;
    if (xs.length === 1) return xs[0];
    if (xs.length === 2) {
      const d0 = Math.abs(xs[0] - tgt);
      const d1 = Math.abs(xs[1] - tgt);
      return d0 < d1 ? xs[0] : xs[1];
    }
    const mid = Math.floor(xs.length / 2);
    if (xs[mid] === tgt) return xs[mid];
    if (xs[mid] > tgt) return loop(xs.slice(0, mid + 1));
    if (xs[mid] < tgt) return loop(xs.slice(mid));
  };

  return loop;
};

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  const arr = [-1, 2, 3, 4, 5, 6, 7, 8, 9, 200];
  console.log("finding 3", binSearch(3)(arr));
  console.log("finding 5", binSearch(5)(arr));
  console.log("finding 9", binSearch(9)(arr));
  console.log("finding 10", binSearch(10)(arr));
  console.log("finding 3.14", binSearch(3.14)(arr));
  console.log("finding 100", binSearch(100)(arr));
  console.log("finding 112", binSearch(112)(arr));
}
