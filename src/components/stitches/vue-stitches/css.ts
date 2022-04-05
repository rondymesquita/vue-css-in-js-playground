import * as Stitches from "@stitches/core";
import type * as Types from "@stitches/core";

export const css = (params: Types.CSS) => {
  return Stitches.css(params)().toString();
};

export const globalCss = Stitches.globalCss;
export const keyframes = Stitches.keyframes;
// export const createStitches = Stitches.createStitches;
