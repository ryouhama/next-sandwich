"use client";

import { use } from "react";
import { format } from "date-fns";
import { Stat, StatLabel, StatNumber, StatHelpText } from "@chakra-ui/react";
import { fetchHistories } from "@/feature/BG/History/apis";
import { fetchUser } from "@/feature/User/fetcher";

export function UserRating() {
  const dammyUserId = 1;
  const { user } = use(fetchUser(dammyUserId));
  const histories = use(fetchHistories(user.id));

  const currentRating =
    histories.length >= 1
      ? {
          rating: String(histories[histories.length - 1].rating),
          date: format(histories[histories.length - 1].date, "yyyy/MM/dd HH:mm:ss"),
        }
      : {
          rating: "-",
          date: "-",
        };

  return (
    <Stat p={8} w={200} h={200}>
      <StatLabel>レート</StatLabel>
      <StatNumber>{currentRating.rating}</StatNumber>
      <StatHelpText>Last: {currentRating.date}</StatHelpText>
    </Stat>
  );
}
