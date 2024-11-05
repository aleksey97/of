import { createSlice } from '@reduxjs/toolkit'

const statusMAC = ['running', 'stopped']
const statusAlerts = ['critical', 'important', 'moderate']

const data = [{
    id: '3ad83858-e748-11ee-9c51-c1219a4c7801',
    state: 'running',
    hostServer: '43C07-27',
    cpu: 5,
    memory: 50.68,
    uptime: 564136232,
    alerts: {
        critical: {
            message: ['1']
        },
        important: {
            message: []
        },
        moderate: {
            message: ['1']
        }
    },
},
    {
        id: '3ad83857-e748-11ee-9c51-c1219a4c7801',
        state: 'stopped',
        hostServer: '43C07-27',
        cpu: 30.95,
        memory: 16.68,
        uptime: 834583824,
        alerts: {
            critical: {
                message: []
            },
            important: {
                message: ['1']
            },
            moderate: {
                message: ['1']
            }
        },
    }]

const machineSlice = createSlice({
    name: 'machine',
    initialState: {
        value: data
    },
    reducers: {
        addMachine: (state, machine) => {
            const id = (Math.random() + 1).toString(36).substring(7);

            state.value = [...state.value, {
                id: id,
                state: 'running',
                hostServer: '43C07-27',
                cpu: machine.payload.cpu,
                memory: machine.payload.ram,
                uptime: 0,
                alerts: {
                    critical: {
                        message: []
                    },
                    important: {
                        message: []
                    },
                    moderate: {
                        message: []
                    }
                }
            }]
        },
        deleteMachine: state => {
            state.value = []
        }
    }
})

export const { addMachine, deleteMachine } = machineSlice.actions

export default machineSlice.reducer
