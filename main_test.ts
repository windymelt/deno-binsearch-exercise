import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";
import { binSearch } from "./main.ts";

Deno.test(function binSearchTest() {
  const xs1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  for (let i = 0; i < xs1.length; i++) {
    assertEquals(binSearch(xs1[i])(xs1), xs1[i]);
  }

  assertEquals(binSearch(-10)(xs1), 0);
  assertEquals(binSearch(100)(xs1), 20);

  const xs2 = xs1.map((x) => x + 0.3);
  for (let i = 0; i < xs2.length; i++) {
    const tgt = Math.floor(xs2[i]);
    console.debug(`searching ${tgt} expect ${xs2[i]}`);
    assertEquals(binSearch(tgt)(xs2), xs2[i]);
  }

  const xs3 = xs1.map((x) => x - 0.3);
  for (let i = 0; i < xs3.length; i++) {
    const tgt = Math.ceil(xs3[i]);
    console.debug(`searching ${tgt} expect ${xs3[i]}`);
    assertEquals(binSearch(tgt)(xs3), xs3[i]);
  }
});
