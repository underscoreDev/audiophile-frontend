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
  { name: "Login", path: "/auth/login" },
  { name: "Signup", path: "/auth/signup" },
];

export const authUserRoutes: NavRoutes[] = [
  { name: "Profile", path: "/user/me" },
  { name: "My Orders", path: "/user/my-orders" },
  { name: "Profile Settings", path: "/user/profile-settings" },
  { name: "Logout", path: "/user/logout" },
];
