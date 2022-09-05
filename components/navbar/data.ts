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

export const userRoutes: NavRoutes[] = [
  { name: "Profile", path: "/user/profile" },
  { name: "Account", path: "/user/account" },
  { name: "Dashboard", path: "/admin/dashboard" },
  { name: "Login", path: "/login" },
  { name: "Signup", path: "/signup" },
  { name: "Logout", path: "/logout" },
];
