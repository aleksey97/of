import React from 'react';
import { ResponsiveContainer, Tooltip, AreaChart, Area, XAxis, YAxis, CartesianGrid} from 'recharts';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import './trendChart.scss';

export default function TrendChart() {
    const data = [
        {
            name: '11/06',
            memory: 500,
        },
        {
            name: '12/06',
            memory: 847,
        },
        {
            name: '13/06',
            memory: 1490,
        },
        {
            name: '14/06',
            memory: 1270,
        },
        {
            name: '15/06',
            memory: 1794,
        },
        {
            name: '16/06',
            memory: 1630,
        },
        {
            name: '17/06',
            memory: 1203,
        },
        {
            name: '18/06',
            memory: 2001,
        },
        {
            name: '19/06',
            memory: 831,
        }
    ]

    return (
        <div className="trend-chart">
            <div className="trend-header">
                <p className="trend-text">
                    Trend
                </p>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl variant="standard" >
                        <Select labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={10}>
                            <MenuItem value={10}>last 14 days</MenuItem>
                            <MenuItem value={20}>last 30 days</MenuItem>
                            <MenuItem value={30}>last 90 days</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 10,
                        right: 10,
                        left: 0,
                        bottom: 10,
                    }}
                >
                    <defs>
                        <linearGradient id="colorMemory" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#5F3196" stopOpacity={0.9}/>
                            <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"
                           axisLine={false}
                           tick={{fontSize: 12}}
                           tickLine={false}/>
                    <YAxis axisLine={false}
                           tick={{fontSize: 12}}
                           tickSize={3}
                           tickFormatter={(value, index) => {
                               return `${value} TB`;
                           }}
                           tickLine={false}/>
                    <Tooltip/>
                    fillOpacity={1} fill="url(#colorUv)"
                    <Area type="monotone"
                          dataKey="memory"
                          stroke="#5F3196"
                          strokeWidth={2}
                          fillOpacity={1}
                          fill="url(#colorMemory)"/>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}
