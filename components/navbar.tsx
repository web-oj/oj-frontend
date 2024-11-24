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
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import clsx from "clsx";
import { KeyboardIcon } from "hugeicons-react";
import { Button } from "@nextui-org/button";
import { User } from "@nextui-org/react";

import { siteConfig } from "@/config/site";
import { useAuth } from "@/app/context";

import { Search } from "./search";
import { usePathname } from "next/navigation";
import { LinearContainer } from "./ui";

export const Navbar = () => {
  const pathname = usePathname();
  const { user } = useAuth();
>>>>>>> main
>>>>>>> Stashed changes
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <NextUINavbar
      position="sticky"
      classNames={{
        wrapper: "w-full max-w-full",
      }}
    >
      <NavbarBrand as="li" className="gap-3 max-w-fit">
        <NextLink className="flex justify-start items-center gap-1" href="/">
          <p className="font-bold text-foreground">Sync <span className="text-primary-foreground p-1 rounded-full bg-primary">Up</span></p>
        </NextLink>
      </NavbarBrand>
      <NavbarContent className="basis-1/5 lg:basis-full" justify="start">
        <div className="hidden lg:flex flex-row gap-4 px-4 py-3 items-center justify-center w-full rounded-full text-foreground">
          <ul className="hidden lg:flex gap-4 justify-start ml-2">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href}>
                <Link
                  className={clsx(
                    "text-foreground-500",
                    "flex flex-row items-center gap-1 rounded-full px-3 py-1",
                    pathname.startsWith(item.href) && "text-foreground bg-primary font-medium"
                  )}
                  size="sm"
                  as={NextLink}
                  color="foreground"
                  href={item.href}
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

      {
        user ? (
          <User
            name={user.user_name}
            avatarProps={{
              showFallback: true,
            }}
          />
        ) : (
          <ul className="w-fit hidden lg:flex flex-row gap-1 items-center">
            <Search />
            <Button
              as={NextLink}
              variant="light"
              href="../ide"
              radius="full"
              isIconOnly
              startContent={<KeyboardIcon className="text-foreground-500" />}
            >
            </Button>
            <Button
              as={NextLink}
              href="../login"
              radius="full"
              color="primary"
              className="font-medium shadow-sm shadow-neutral-50"
            >
              Get started
            </Button>
          </ul>
        )
      }
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="text-foreground-100 lg:hidden"
      />
      <NavbarMenu className="bg-foreground-800">
        {siteConfig.navItems.map((item) => (
          <NavbarMenuItem key={item.href}>
            <Link
              className={clsx(
                "text-foreground-100",
                "flex flex-row items-center gap-1 rounded-full px-3 py-1",
                pathname.startsWith(item.href) && "text-primary-foreground bg-primary font-medium"
              )}
              size="sm"
              as={NextLink}
              color="foreground"
              href={item.href}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Button
            fullWidth
            as={NextLink}
            href="../ide"
            className="px-4 flex flex-row"
            radius="full"
            color="secondary"
            startContent={<KeyboardIcon />}
          >
            Open IDE
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <LinearContainer direction="row" space="sm" className="justify-center items-center" fullwidth>
            <Button
              fullWidth
              as={NextLink}
              href="../login"
              radius="full"
              color="primary"
            >
              Get started
            </Button>
          </LinearContainer>
        </NavbarMenuItem>
      </NavbarMenu>
    </NextUINavbar >
  );
};
