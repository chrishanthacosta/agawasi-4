export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Next.js + NextUI",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		 {
      label: "Vision",
      href: "/vision",
    },
    {
      label: "Products",
      href: "/products",
    },
   
    {
      label: "My Profile",
      href: "/myprofile",
    },
    {
      label: "About",
      href: "/about",
    }
	],
	navMenuItems: [
		{
			label: "Vision",
			href: "/vision",
		},
		{
			label: "Products",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		facebook: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		 
    sponsor: "https://www.www.con"
	},
};
