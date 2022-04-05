import { css } from "./vue-stitches";

export const card = css({
  color: "$fg",
  background: "$bg",
  width: 300,
  margin: "12px auto",
  padding: 20,
  borderRadius: 20,
  p: {
    fontStyle: "italic",
    a: {
      fontWeight: 800,
    },
  },
  ".button": {
    background: "$primary",
    color: "$bg",
    border: "none",
    padding: 10,
  },
});

// const globalStyles = globalCss({
//   body: { backgroundColor: "red" },
// });
