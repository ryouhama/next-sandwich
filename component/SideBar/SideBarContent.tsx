"use client";

import { PropsWithChildren } from "react";
import { Box, BoxProps, Flex, Text, useColorModeValue } from "@chakra-ui/react";

type Props = {} & BoxProps;

export function SideBarContent({ children, ...rest }: PropsWithChildren<Props>) {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
      </Flex>
      {children}
    </Box>
  );
}
