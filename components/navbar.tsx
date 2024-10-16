import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";

import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import {
  SearchIcon,
  Logo,
} from "@/components/icons";
import { DashboardBrowsingIcon, KeyboardIcon, RankingIcon, SourceCodeIcon } from "hugeicons-react";
import { Button } from "@nextui-org/button";
import { Search } from "./search";

export const Navbar = () => {
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

  const getIconLink = ({ label }: { label: string }) => {
    switch (label.toLowerCase()) {
      case "dashboard":
        return <DashboardBrowsingIcon size={20} className="text-foreground-500" />;
      case "contests":
        return <SourceCodeIcon size={20} className="text-foreground-500" />;
      case "leaderboard":
        return <RankingIcon size={20} className="text-foreground-500" />;
      default:
        return null;
    }
  }

  return (
    <NextUINavbar
      maxWidth="xl"
      position="sticky"
      classNames={{
        wrapper: "mt-4"
      }}
    >
      <div className="flex flex-row gap-4 px-4 py-3 items-center justify-center w-full bg-foreground-900 rounded-full text-foreground-100">
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            <NextLink className="flex justify-start items-center gap-1" href="/">
              <Logo />
              <p className="font-bold">Sync <span className="text-primary">Up</span></p>
            </NextLink>
          </NavbarBrand>
          <ul className="hidden lg:flex gap-4 justify-start ml-2">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href}>
                <Link
                  className={clsx(
                    "text-foreground-100",
                    "flex flex-row items-center gap-2",
                  )}
                  size="sm"
                  as={NextLink}
                  color="foreground"
                  href={item.href}
                >
                  {
                    <div className="bg-foreground-800 rounded-full w-8 h-8 flex items-center justify-center">
                      {getIconLink(item)}
                    </div>
                  }
                  {item.label}
                </Link>
              </NavbarItem>
            ))}
          </ul>
        </NavbarContent>

        <NavbarMenu>
          {searchInput}
          <div className="mx-4 mt-2 flex flex-col gap-2">
            {siteConfig.navMenuItems.map((item, index) => (
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
          </div>
        </NavbarMenu>
        <Search />
        <ul className="flex gap-4 flex-row w-fit">
          <Button
            className="bg-primary-300 px-8 w-fit flex flex-row"
            radius="full"
            color="primary"
            startContent={<KeyboardIcon />}
          >
            Open IDE
          </Button>
        </ul>
      </div>
      <ul className="w-fit flex flex-row gap-4 items-center">
        <Button
          as={NextLink}
          href="../register"
          radius="full"
          color="default"
        >
          Register
        </Button>
        <Button
          as={NextLink}
          href="../login"
          radius="full"
          color="primary"
        >
          Login
        </Button>
      </ul>
    </NextUINavbar>
  );
};
