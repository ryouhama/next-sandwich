"use client";

import { FiHome, FiTrendingUp, FiCompass, FiStar, FiSettings } from "react-icons/fi";
import { SideBarContent, SideBarNav } from "@/component";

const LinkItems = [
  { name: "Home", icon: FiHome },
  { name: "Trending", icon: FiTrendingUp },
  { name: "Explore", icon: FiCompass },
  { name: "Favourites", icon: FiStar },
  { name: "Settings", icon: FiSettings },
];

export function SideBar() {
  const pankuzu = LinkItems.map((it) => ({ ...it, href: it.name }));
  return (
    <SideBarContent>
      {pankuzu.map((nav, index) => (
        <SideBarNav key={index} icon={nav.icon} href={nav.href}>
          {nav.name}
        </SideBarNav>
      ))}
    </SideBarContent>
  );
}
