type Rgb = [number, number, number];

const PAGE_BACKGROUND = { light: "#faf6f1", dark: "#0f0d0c" } as const;
const WHITE = "#ffffff";
const INK = "#0f0d0c";

const hexToRgb = (hex: string): Rgb => {
  const value = parseInt(hex.slice(1), 16);
  return [(value >> 16) & 255, (value >> 8) & 255, value & 255];
};

const rgbToHex = (rgb: Rgb) =>
  `#${rgb.map((v) => Math.round(v).toString(16).padStart(2, "0")).join("")}`;

const luminance = (rgb: Rgb) => {
  const [r, g, b] = rgb.map((channel) => {
    const v = channel / 255;
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

const contrast = (a: Rgb, b: Rgb) => {
  const [lighter, darker] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (lighter + 0.05) / (darker + 0.05);
};

const mix = (from: Rgb, to: Rgb, amount: number): Rgb => [
  from[0] + (to[0] - from[0]) * amount,
  from[1] + (to[1] - from[1]) * amount,
  from[2] + (to[2] - from[2]) * amount,
];

const withContrast = (
  color: Rgb,
  background: Rgb,
  minimum: number,
  towards: Rgb,
) => {
  for (let amount = 0; amount <= 1; amount += 0.04) {
    const candidate = mix(color, towards, amount);
    if (contrast(candidate, background) >= minimum) return candidate;
  }
  return towards;
};

export interface AccentColors {
  accent: string;
  accentText: string;
  onAccent: string;
  hover: string;
}

export const getAccentColors = (
  teamHex: string,
  scheme: "light" | "dark",
): AccentColors => {
  const team = hexToRgb(teamHex);
  const background = hexToRgb(PAGE_BACKGROUND[scheme]);
  const towards = hexToRgb(scheme === "light" ? INK : WHITE);
  const accent = withContrast(team, background, 3, towards);
  const onAccent =
    contrast(accent, hexToRgb(WHITE)) >= contrast(accent, hexToRgb(INK))
      ? WHITE
      : INK;
  return {
    accent: rgbToHex(accent),
    accentText: rgbToHex(withContrast(team, background, 4.5, towards)),
    onAccent,
    hover: rgbToHex(mix(accent, hexToRgb(INK), 0.14)),
  };
};
