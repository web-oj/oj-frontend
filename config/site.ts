export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Sync Up",
  description: "Online judging platform for hackathons and coding competitions",
  navItems: [
    {
      label: "Problems",
      href: "/problems",
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
