import React from 'react';
import './machineList.scss';
import { Line } from 'rc-progress';
import parseMilliseconds from 'parse-ms';
import AlertsComponent from "./AlertsComponent/AlertsComponent";
import { useSelector } from 'react-redux';

export default function MachineList({onOpen}) {
    const machines = useSelector(state => state.machine.value);

    const getStateText = (state) => {
        if (state === 'running') {
            return (<div className="state-running">Running</div>)
        } else {
            return (<div className="state-stopped">Stopped</div>)
        }
    }

    const getTimeText = (time) => {
        const parsedTime =  parseMilliseconds(time);
        return (
            <p>
                {parsedTime.hours}:{parsedTime.minutes}:{parsedTime.seconds}:{parsedTime.milliseconds}
            </p>
        )
    }


    return (
        <div className="machine-list">
            <div className="machine-header">
                <div className="title">
                    Virtual machines &nbsp; {machines?.length}
                </div>
                <div className="new-btn"
                     onClick={onOpen}>
                    + New
                </div>
            </div>
            <div className="content">
                <div className="content-title">
                    <div className="title-item">ID</div>
                    <div className="title-item">State<div className="filter-icon"/></div>
                    <div className="title-item">Host server</div>
                    <div className="title-item">CPU<div className="filter-icon"/></div>
                    <div className="title-item">Memory<div className="filter-icon"/></div>
                    <div className="title-item">Uptime<div className="filter-icon"/></div>
                    <div className="title-item">Alerts</div>
                </div>
                <div className="items">
                    {machines.map(item => {
                        return (
                            <div className="list-item"
                                 key={item?.id}>
                                <div className="item-id">
                                    <p className="item-text">{item?.id}</p>
                                </div>
                                <div className="item-state">
                                    {getStateText(item?.state)}
                                </div>
                                <div className="item-host">
                                    <p>{item?.hostServer}</p>
                                </div>
                                <div className="item-cpu">
                                    {item?.cpu}&#32;CPU
                                    <Line percent={item?.cpu}
                                          className="line"
                                          strokeWidth={10}
                                          trailWidth={10}
                                          strokeColor="#5F3196" />

                                </div>
                                <div className="item-memory">
                                    {item?.memory}&#32;GB
                                    <Line percent={item?.memory}
                                          className="line"
                                          strokeWidth={10}
                                          trailWidth={10}
                                          strokeColor="#5F3196" />
                                </div>
                                <div className="item-uptime">
                                    {getTimeText(item?.uptime)}
                                </div>
                                <div className="item-alerts">
                                    {AlertsComponent(item?.alerts)}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
