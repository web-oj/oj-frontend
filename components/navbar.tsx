"use client";

import React from "react";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  User,
  Button,
  Link,
} from "@nextui-org/react";
import NextLink from "next/link";
import clsx from "clsx";
import { KeyboardIcon, LogoutCircle01Icon, UserIcon } from "hugeicons-react";
import { usePathname } from "next/navigation";


import { siteConfig } from "@/config/site";
import { useAuth } from "@/app/context";

import { Search } from "./search";
import { LinearContainer } from "./ui";


export const Navbar = () => {
  const pathname = usePathname();
  const { user } = useAuth();

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const UserAccordion = () => {

    const { logout } = useAuth();

    return (
      <Dropdown>
        <DropdownTrigger>
          <User
            avatarProps={{
              showFallback: true,
            }}
            name={user?.handle}
            className="cursor-pointer"
          />
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem
            key={"profile"}
            startContent={
              <UserIcon className="text-foreground-500" />
            }
          >
            <NextLink href="/profile">Profile</NextLink>
          </DropdownItem>
          <DropdownItem
            key={"logout"}
            startContent={<LogoutCircle01Icon className="text-foreground-500" />}
            onClick={logout}
          >
            Logout
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    )
  };

  const Toolbar = () => {
    return (
      <LinearContainer
        fullwidth
        className="justify-center items-center"
        direction="row"
        space="sm"
      >
        {true && <Button
          as={NextLink}
          className="font-medium shadow-sm shadow-neutral-50"
          color="primary"
          href="/problems/create"
          radius="full"
        >
          Create Problem
        </Button>
        }
        {true && <Button
          as={NextLink}
          className="font-medium shadow-sm shadow-neutral-50"
          color="primary"
          href="/contests/create"
          radius="full"
        >
          Create Contest
        </Button>}
      </LinearContainer>
    )
  };

  return (
    <NextUINavbar
      classNames={{
        wrapper: "w-full max-w-full",
      }}
      position="sticky"
    >
      <NavbarBrand as="li" className="gap-3 max-w-fit">
        <NextLink className="flex justify-start items-center gap-1" href="/">
          <p className="font-bold text-foreground">
            Sync{" "}
            <span className="text-primary-foreground p-1 rounded-full bg-primary">
              Up
            </span>
          </p>
        </NextLink>
      </NavbarBrand>
      <NavbarContent className="basis-1/5 lg:basis-full" justify="start">
        <div className="hidden lg:flex flex-row gap-4 px-4 py-3 items-center justify-center w-full rounded-full text-foreground">
          <ul className="hidden lg:flex gap-4 justify-start ml-2">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href}>
                <Link
                  as={NextLink}
                  className={clsx(
                    "text-foreground-500",
                    "flex flex-row items-center gap-1 rounded-full px-3 py-1",
                    pathname.startsWith(item.href) &&
                    "text-foreground bg-primary font-medium",
                  )}
                  color="foreground"
                  href={item.href}
                  size="sm"
                >
                  {item.label}
                </Link>
              </NavbarItem>
            ))}
          </ul>
          <NavbarMenu className="hidden lg:flex">
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
        </div>
      </NavbarContent>
      {user ? (
        <ul className="w-fit hidden lg:flex flex-row gap-1 items-center">
          <Toolbar />
          <Search />
          <UserAccordion />
        </ul>
      ) : (
        <ul className="w-fit hidden lg:flex flex-row gap-1 items-center">
          <Button
            isIconOnly
            as={NextLink}
            href="../ide"
            radius="full"
            startContent={<KeyboardIcon className="text-foreground-500" />}
            variant="light"
          />
          <Button
            as={NextLink}
            className="font-medium shadow-sm shadow-neutral-50"
            color="primary"
            href="../login"
            radius="full"
          >
            Get started
          </Button>
        </ul>
      )}
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="text-foreground-100 lg:hidden"
      />
      <NavbarMenu className="bg-foreground-800">
        {siteConfig.navItems.map((item) => (
          <NavbarMenuItem key={item.href}>
            <Link
              as={NextLink}
              className={clsx(
                "text-foreground-100",
                "flex flex-row items-center gap-1 rounded-full px-3 py-1",
                pathname.startsWith(item.href) &&
                "text-primary-foreground bg-primary font-medium",
              )}
              color="foreground"
              href={item.href}
              size="sm"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Button
            fullWidth
            as={NextLink}
            className="px-4 flex flex-row"
            color="secondary"
            href="../ide"
            radius="full"
            startContent={<KeyboardIcon />}
          >
            Open IDE
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <LinearContainer
            fullwidth
            className="justify-center items-center"
            direction="row"
            space="sm"
          >
            {
              user ? (
                <UserAccordion />
              ) : (
                <Button
                  fullWidth
                  as={NextLink}
                  color="primary"
                  href="../login"
                  radius="full"
                >
                  Get started
                </Button>
              )
            }
          </LinearContainer>
        </NavbarMenuItem>
      </NavbarMenu>
    </NextUINavbar>
  );
};
