import React from 'react';
import { PieChart, Pie, Label, Cell} from 'recharts';
import { useSelector } from 'react-redux';
import './stateChart.scss';

export default function StateChart() {
    const machines = useSelector(state => state.machine.value);
    const allMach = machines.reduce((acc, val) => {
        if(val?.state === 'running') {
            return {
                ...acc,
                running: acc.running + 1
            }
        }
        return {
            ...acc,
            stopped: acc.stopped + 1
        }
    },{stopped: 0, running: 0})
    console.log('!machines = ', machines, allMach)

    const data = [
        { name: 'Stopped', value: allMach.stopped },
        { name: 'Running', value: allMach.running },
    ];

    const machVal = allMach.running + allMach.stopped;

    const COLORS = ['#DC3545', '#459E74'];

    const CustomLabel = props => {
        return (
            <g dy={20} dx={-30}>
                <text x={props.viewBox.cx} y={props.viewBox.cy} className="label-val" fill="#111" dy={0} dx={-10}>
                    {machVal}
                </text>
                <text x={props.viewBox.cx} y={props.viewBox.cy} fill="#111" dy={20} dx={-45}>Total number</text>
            </g>
    );
    };

    return (
        <div className="state-chart">
            <div className="title">
                State
            </div>

            <div className="state-content">
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx={120}
                        cy={200}
                        width={172}
                        height={172}
                        innerRadius={60}
                        outerRadius={110}
                        fill="#8884d8"
                        defaultShowTooltip={true}
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                        <Label content={<CustomLabel/>}  offset={0} position="center"/>
                    </Pie>
                </PieChart>
                <div className="state-legend">
                    <div className="legend-stopped">
                        <div className="stopped-icon"/>
                        <span className="legend-text-b">{allMach.stopped}</span> &nbsp; stopped
                    </div>
                    <div className="legend-running">
                        <div className="running-icon"/>
                        <span className="legend-text-b">{allMach.running}</span> &nbsp;running
                    </div>
                </div>
            </div>
        </div>
    );
}
