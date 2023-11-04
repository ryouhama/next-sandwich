"use client";

import { Suspense } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import {
  HistoryRatingLineGraph,
  HistoryRatingGraphLoading,
  UserRating,
  UserRatingLoading,
} from "@/feature/BG/History";

export function DashboardLayout() {
  return (
    <Grid h="1000px" templateRows="repeat(10, 1fr)" templateColumns="repeat(4, 1fr)" gap={4}>
      <GridItem rowSpan={2} colSpan={1} bg="snow">
        <Suspense fallback={<UserRatingLoading />}>
          <UserRating />
        </Suspense>
      </GridItem>
      <GridItem rowSpan={2} colSpan={3} bg="papayawhip" />
      <GridItem rowSpan={5} colSpan={3} bg="snow">
        <Suspense fallback={<HistoryRatingGraphLoading />}>
          <HistoryRatingLineGraph />
        </Suspense>
      </GridItem>
      <GridItem rowSpan={5} colSpan={1} bg="papayawhip" />
    </Grid>
  );
}
