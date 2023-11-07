"use client";
import { Box } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export function ContentLayout({ children }: PropsWithChildren) {
  return (
    <Box ml={{ base: 0, md: 60 }} p="4">
      {children}
    </Box>
  );
}
