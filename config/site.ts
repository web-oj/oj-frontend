export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Sync Up",
  description: "Online judging platform for hackathons and coding competitions",
  navItems: [
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Contests",
      href: "/contests",
    },
    {
      label: "Leaderboard",
      href: "/leaderboard",
    }
  ],
  navMenuItems: [
    {
      label: "Profile",
    },
    {
      label: "Settings",
    },
    {
      label: "Logout",
    }
  ],
};
