import { use, Suspense } from "react";
import { Box } from "@chakra-ui/react";
import { HistoryRatingLineGraph, UserRating, UserRatingLoading } from "@/feature/BG/History";
import { fetchUser } from "@/feature/User/fetcher";

export default function Home() {
  const dammyUserId = 1;
  const { user } = use(fetchUser(dammyUserId));

  return (
    <Box p="4">
      <Suspense fallback={<UserRatingLoading />}>
        <UserRating />
      </Suspense>
      <Suspense fallback={<UserRatingLoading />}>
        <HistoryRatingLineGraph />
      </Suspense>
    </Box>
  );
}
