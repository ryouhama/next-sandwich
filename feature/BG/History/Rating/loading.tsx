"use client";

import { Box, Spinner } from "@chakra-ui/react";

export function UserRatingLoading() {
  return (
    <Box w={200} h={200}>
      <Spinner />
    </Box>
  );
}
