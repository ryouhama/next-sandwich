"use client";

import { Container, Box } from "@chakra-ui/react";
import { Suspense } from "react";
import { HistoryRatingGraph } from "@/feature/BG/History";

export default function Home() {
  return (
    <main>
      <Container maxW={"7xl"}>
        <Box ml={{ base: 0, md: 60 }} p="4">
          <Suspense fallback={<div>Loading...</div>}>
            <HistoryRatingGraph />
          </Suspense>
        </Box>
      </Container>
    </main>
  );
}
