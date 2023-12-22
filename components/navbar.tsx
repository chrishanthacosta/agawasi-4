"use client"
import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import {
	TwitterIcon,
	GithubIcon,
	DiscordIcon,
	HeartFilledIcon,
	SearchIcon,
	LoginIcon,
	FacebookIcon,
	LogoutIcon,
} from "@/components/icons";

import { Logo } from "@/components/icons";

import { signIn, useSession, signOut } from "next-auth/react"
import { useEffect } from "react";


export const Navbar = () => {

	const { data: session } = useSession();

	useEffect(() => {
		const u = { userName: "costa" || "", loggedIn: true }
		//dispatch(setUSer(u))

	}, [session])

	console.log("session", session?.user?.name )
	// const user = useSelector((state: RootState) => state.user)
	// const dispatch = useDispatch();


	const searchInput = (
		<Input
			aria-label="Search"
			classNames={{
				inputWrapper: "bg-default-100",
				input: "text-sm",
			}}
			endContent={
				<Kbd className="hidden lg:inline-block" keys={["command"]}>
					K
				</Kbd>
			}
			labelPlacement="outside"
			placeholder="Search..."
			startContent={
				<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
			}
			type="search"
		/>
	);



	return (
		<NextUINavbar maxWidth="xl" position="sticky">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<Logo className="mt-[2]"/>
						<p className="font-bold text-inherit inline marker:">Aga</p>
						<p className="font-bold text-inherit inline text-indigo-600">Wasi</p>
					</NextLink>
				</NavbarBrand>
				<ul className="hidden lg:flex gap-4 justify-start ml-2">
					{siteConfig.navItems.map((item) => {
						
						
						
						if (item.label == "My Profile") {
							
							if ( session?.user?.name != "guesta")
							return (
								<NavbarItem key={item.href}>
									<NextLink
										className={clsx(
											linkStyles({ color: "foreground" }),
											"data-[active=true]:text-primary data-[active=true]:font-medium"
										)}
										color="foreground"
										href={item.href}
									>
										{item.label}
									</NextLink>
								</NavbarItem>
							)
						 }
						else  {
							return (
								<NavbarItem key={item.href}>
									<NextLink
										className={clsx(
											linkStyles({ color: "foreground" }),
											"data-[active=true]:text-primary data-[active=true]:font-medium"
										)}
										color="foreground"
										href={item.href}
									>
										{item.label}
									</NextLink>
								</NavbarItem>
							)
						}
						})}
				</ul>
			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden sm:flex gap-2">
					<Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">
						<TwitterIcon className="text-default-500" />
					</Link>
					<Link isExternal href={siteConfig.links.facebook} aria-label="Discord">
						<FacebookIcon className="text-default-500" />
					</Link>
					<ThemeSwitch />
				</NavbarItem>
				<NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
				<NavbarItem className="hidden md:flex">
					{ session && <Button
						isExternal
						as={Link}
						className="text-sm font-normal text-default-600 bg-default-100"
						href={"/api/auth/signout"}
						startContent={<LogoutIcon className="text-danger" />}
						variant="flat"
					>
						{"Log Out " + session?.user?.name}
					</Button>}
					{!session && <Button
						isExternal
						as={Link}
						className="text-sm font-normal text-default-600 bg-default-100"
						href={"/api/auth/signin"}
						startContent={<LoginIcon className="text-danger" />}
						variant="flat"
					>
						Login
					</Button>}
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<Link isExternal href={siteConfig.links.facebook} aria-label="Github">
					<FacebookIcon className="text-default-500" />
				</Link>
				<ThemeSwitch />
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu>
				{searchInput}
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link
								color={
									index === 2
										? "primary"
										: index === siteConfig.navMenuItems.length - 1
										? "danger"
										: "foreground"
								}
								href="#"
								size="lg"
							>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
					<NavbarMenuItem key={"100"}>
						<Link
							color={
								"foreground"
							}
							href="#"
							size="lg"
						>
							{"Login"}
						</Link>
					</NavbarMenuItem>
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
