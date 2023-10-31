"use client"

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Box } from '@chakra-ui/react'

type Props = {
  data: any
}


export const HistoryRatingGraphPresenter: React.FC<Props> = ({ data }) => {
  return (
    <Box>
      <LineChart width={730} height={250} data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type='category' dataKey="name" interval="equidistantPreserveStart" />
        <YAxis type="number" domain={['dataMin - 300', 'dataMax + 300']} />
        <Legend />
        <Line type="monotone" dataKey="y" stroke="#8884d8" />
      </LineChart>
    </Box>
  )
}
