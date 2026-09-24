import { describe, expect, it } from "vitest";
import { z } from "zod";

describe("runtime validation setup", () => {
  it("rejects invalid external input", () => {
    const schema = z.object({ text: z.string().min(1) });

    expect(schema.safeParse({ text: "" }).success).toBe(false);
    expect(schema.parse({ text: "My drill is in the garage." })).toEqual({
      text: "My drill is in the garage.",
    });
  });
});
