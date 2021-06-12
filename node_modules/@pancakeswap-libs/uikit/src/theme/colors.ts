import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#000000",
  primaryBright: "#000000",
  primaryDark: "#000000",
  secondary: "#7645D9",
  success: "#1d1f4f",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#000000",
  textDisabled: "#BDC2C4",
  textSubtle: "#000000",
  borderColor: "#E9EAEB",
  card: "#aeaeae",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
    success: "#FFFFFF",
      primary: "#FFFFFF",
      primaryBright: "#FFFFFF",
  primaryDark: "#FFFFFF",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  tertiary: "#353547",
  text: "#FFFFFF",
  textDisabled: "#666171",
  textSubtle: "#FFFFFF",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
