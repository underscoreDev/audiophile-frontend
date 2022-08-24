export interface NavRoutes {
  name: string;
  path: string;
}
export const routes: NavRoutes[] = [
  { name: "Home", path: "/" },
  { name: "HEADPHONES", path: "/headphones" },
  { name: "SPEAKERS", path: "/speakers" },
  { name: "EARPHONES", path: "/earphones" },
];
