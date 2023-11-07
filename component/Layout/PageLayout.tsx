"use client";

import { PropsWithChildren } from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";

export function PageLayout({ children }: PropsWithChildren) {
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      {children}
    </Box>
  );
}
