"use client";

import { Input } from "@nextui-org/react";
import { Kbd } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

import { SearchIcon } from "../icons";

export function Search() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isExpanded, setIsExpanded] = React.useState(false);
  const createQueryString = React.useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );
  const handleSearch = React.useCallback(
    (query: string) => {
      router.push(`${pathname}?${createQueryString("search", query)}`);
    },
    [router],
  );

  const handleButtonClick = () => {
    setIsExpanded(true);
  };

  const handleBlur = () => {
    setIsExpanded(false);
  };

  return (
    <div className="relative">
      <AnimatePresence>
        {isExpanded ? (
          <motion.div
            animate={{ width: 256 }}
            exit={{ width: 40 }}
            initial={{ width: 40 }}
            transition={{ duration: 0.3 }}
          >
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
              radius="full"
              startContent={
                <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
              }
              type="search"
              onBlur={handleBlur}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </motion.div>
        ) : (
          <motion.div
            key="button"
            animate={{ width: 40 }}
            exit={{ width: 40 }}
            initial={{ width: 40 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              isIconOnly
              radius="full"
              startContent={
                <SearchIcon className="text-base text-foreground-500" />
              }
              variant="light"
              onClick={handleButtonClick}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
