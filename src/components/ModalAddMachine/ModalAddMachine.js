import React, {useState} from 'react';
import NameInput from './NameInput/NameInput'
import SettingsInput from './SettingsInput/SettingsInput'
import CompleteComponent from './CompleteComponent/CompleteComponent'
import Modal from '@mui/material/Modal';
import './modalAddMachine.scss';
import {useDispatch} from "react-redux";
import { addMachine } from '../../store/features/machines/machineSlice';

const steps = ['naming','settings','appling']

export default function ModalAddMachine({onClose, open}) {
    const [name, setName] = useState('');
    const [cpu, setCPU] = useState('');
    const [ram, setRAM] = useState('');
    const [status, setStatus] = useState('naming');
    const dispatch = useDispatch();

    const onAddNewMachine = () => {
        dispatch(addMachine({cpu,ram,name}));
        setName('');
        setCPU('');
        setRAM('');
        setStatus('naming')
        onClose();
    }

    const closeModal = () => {
        setName('');
        setCPU('');
        setRAM('');
        setStatus('naming');
        onClose();
    }

    return (
        <Modal aria-labelledby="unstyled-modal-title"
             aria-describedby="unstyled-modal-description"
             open={open}
             onClose={closeModal}>
              <div className="modal-block">
                  <div className="modal-content">
                      <div className="modal-header">
                          <div>New virtual machine</div>
                          <div className="cross-icon"
                               onClick={closeModal}/>
                      </div>
                      <div className="modal-body">
                          <div className="menu-block">
                              <p className="menu-text">Welcome to the</p>
                              <p className="menu-title">New Virtual Machine Wizard</p>
                              <p className="menu-text">{status === 'naming' ? `\t—` : '✔'}&#32;Virtual Machine Name</p>
                              <p className="menu-text">{status !== 'appling' ? `\t—` : '✔'}&#32;General Settings</p>
                          </div>
                          {status === 'naming' && <NameInput onSetName={setName}
                                                             name={name}
                                                             onSetStatus={setStatus}/>}
                          {status === 'settings' && <SettingsInput cpu={cpu}
                                                                   ram={ram}
                                                                   onSetCPU={setCPU}
                                                                   onSetRAM={setRAM}
                                                                   onSetStatus={setStatus}/>}
                          {status === 'appling' && <CompleteComponent cpu={cpu}
                                                                      onSetStatus={setStatus}
                                                                      onAddNewMachine={onAddNewMachine}
                                                                      ram={ram}
                                                                      name={name}/>}
                      </div>
                  </div>
              </div>
      </Modal>
  );
}
