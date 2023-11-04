"use client";

import { PropsWithChildren } from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { FiHome, FiTrendingUp, FiCompass, FiStar, FiSettings } from "react-icons/fi";
import { SideBarContent, SideBarNav } from "@/component/SideBar";

const LinkItems = [
  { name: "Home", icon: FiHome },
  { name: "Trending", icon: FiTrendingUp },
  { name: "Explore", icon: FiCompass },
  { name: "Favourites", icon: FiStar },
  { name: "Settings", icon: FiSettings },
];

export function PageLayout({ children }: PropsWithChildren<{}>) {
  const pankuzu = LinkItems.map((it) => ({ ...it, href: it.name }));
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SideBarContent>
        {pankuzu.map((nav, index) => (
          <SideBarNav key={index} icon={nav.icon} href={nav.href}>
            {nav.name}
          </SideBarNav>
        ))}
      </SideBarContent>
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}
