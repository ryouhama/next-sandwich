"use client";

import { PropsWithChildren } from "react";
import { Box, Flex, FlexProps, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

type Props = {
  icon: IconType;
  href: string;
} & FlexProps;

export function SideBarNav({ icon, href, children, ...rest }: PropsWithChildren<Props>) {
  return (
    <Box as="a" href={href} style={{ textDecoration: "none" }} _focus={{ boxShadow: "none" }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
}
