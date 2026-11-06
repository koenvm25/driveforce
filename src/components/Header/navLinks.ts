import { IconProp } from "@fortawesome/fontawesome-svg-core";

const year = new Date().getFullYear();

export interface NavLinkItem {
  link: string;
  match: string;
  label: string;
  icon: IconProp;
}

export const navLinks: NavLinkItem[] = [
  { link: "/", match: "/", label: "Home", icon: ["fas", "house"] },
  {
    link: `/calendar/${year}`,
    match: "/calendar",
    label: "Calendar",
    icon: ["far", "calendar"],
  },
  {
    link: `/standings/${year}`,
    match: "/standings",
    label: "Standings",
    icon: ["fas", "ranking-star"],
  },
  {
    link: "/penalty-points",
    match: "/penalty-points",
    label: "Penalties",
    icon: ["fas", "triangle-exclamation"],
  },
];

export const isActiveLink = (pathname: string, match: string) =>
  match === "/" ? pathname === "/" : pathname.startsWith(match);
