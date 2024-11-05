import React from 'react';
import './completeComponent.scss';

export default function CompleteComponent({ram, cpu, name, onSetStatus, onAddNewMachine}) {

    return (
        <div className="complete-comp">
            <div className="controls-title">
                Ready to complete
            </div>
            <div className="controls-text">
                Review your settings selection before finishing the wizard.
            </div>
            <div className="content">
                <div className="name-block">
                    <div className="title">Name</div>
                    {name}
                </div>
                <div className="cpu-block">
                    <div className="title">CPU</div>
                    {cpu}
                </div>
                <div className="ram-block">
                    <div className="title">RAM</div>
                    {ram} GB
                </div>
                <div className="edit-block">
                    <div className="edit-icon"
                         onClick={() => onSetStatus('settings')}/>
                </div>
            </div>
            <div className="btn-wrapper">
                <div className="btn-back"
                     onClick={() => onSetStatus('settings')}>
                    Back
                </div>
                <div className="btn-create"
                     onClick={onAddNewMachine}>
                    Create
                </div>
            </div>
        </div>
    );
}
