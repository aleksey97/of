import React, {useState} from 'react';
import StateChart from "../../components/StateChart/StateChart";
import TrendChart from "../../components/TrendChart/TrendChart";
import MachineList from "../../components/MachineList/MachineList";
import ModalAddMachine from "../../components/ModalAddMachine/ModalAddMachine";
import './dashboard.scss';

export default function Dashboard() {
    const [open, setOpen] = useState(false);
    const onClose = () => setOpen(false);
    const onOpen = () => setOpen(true);

    return (
        <div className="dashboard">
            <div className="charts-list">
                <StateChart/>
                <TrendChart/>
            </div>
            <MachineList onOpen={onOpen}/>
            <ModalAddMachine open={open}
                             onClose={onClose}/>
        </div>
    );
}
