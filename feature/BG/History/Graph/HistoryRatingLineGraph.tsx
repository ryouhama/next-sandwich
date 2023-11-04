"use client";

import { fetchUser } from "@/feature/User/fetcher";
import { use } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { fetchHistories } from "../apis";
import { useGraphData } from "./hooks";

export function HistoryRatingLineGraph() {
  const dammyUserId = 1;
  const { user } = use(fetchUser(dammyUserId));
  const histories = use(fetchHistories(user.id));
  const data = useGraphData(histories);

  return (
    <LineChart
      width={1000}
      height={400}
      data={data}
      margin={{ top: 40, right: 16, left: 16, bottom: 16 }}
    >
      <CartesianGrid strokeDasharray="5 5" />
      <XAxis type="category" dataKey="name" interval="equidistantPreserveStart" />
      <YAxis type="number" domain={["dataMin - 300", "dataMax + 300"]} />
      <Legend />
      <Tooltip />
      <Line type="monotone" dataKey="y" stroke="#8884d8" />
    </LineChart>
  );
}
