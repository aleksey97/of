import React from 'react';
import './alertsComponent.scss';

export default function AlertsComponent(data) {
    if(data?.critical?.message?.length) {
        return (<div className="alerts-block">
            <div className="critical-icon"/> {data?.critical?.length} &nbsp; Critical
        </div>)
    }
    if (data?.important?.message?.length) {
        return (<div className="alerts-block">
            <div className="important-icon"/> {data?.important?.length} &nbsp; Important
        </div>)
    }
    if (data?.moderate?.message?.length) {
        return (<div className="alerts-block">
            <div className="moderate-icon"/> {data?.moderate?.length} &nbsp; Moderate
        </div>)
    }
    return (<div className="alerts-block">
        <div className="good-icon"/>All good
    </div>)
}
