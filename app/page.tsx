import { use } from "react";
import { Box } from "@chakra-ui/react";
import { fetchUser } from "@/feature/User/fetcher";
import { DashboardLayout } from "./_DashboardLayout";

export default function Home() {
  const dammyUserId = 1;
  const { user } = use(fetchUser(dammyUserId));

  return (
    <Box p="4">
      <DashboardLayout />
    </Box>
  );
}
