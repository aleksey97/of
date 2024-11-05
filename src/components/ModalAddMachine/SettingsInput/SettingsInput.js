import React, {useState} from 'react';
import './settingsInput.scss';
import ProgressBar from '../ProgressBar/ProgressBar'
import TextField from "@mui/material/TextField";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import {Button} from "@mui/material";

const styles = {width: '100%',
    "& .MuiOutlinedInput-root": {
        color: "#000000",
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#5F3196",
        },
        "&.Mui-focused": {
            "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#5F3196",
            },
        },
        "&:hover:not(.Mui-focused)": {
            "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#5F3196",
            },
        },
    },
    "& .MuiInputLabel-outlined": {
        color: "#5F3196",
        "&.Mui-focused": {
            color: "#5F3196",
        },
    },
}

export default function SettingsInput({cpu, onSetRAM, onSetStatus, onSetCPU, ram}) {
    const [errorCPU, setErrorCPU] = useState(false);
    const [errorRAM, setErrorRAM] = useState(false);

    const changeCPU = (cpu) => {
        onSetCPU(cpu)
        if(cpu > 12) {
            setErrorCPU(true);
        } else {
            setErrorCPU(false);
        }
    }

    const changeRAM = (ram) => {
        onSetRAM(ram)
        if(ram > 50) {
            setErrorRAM(true);
        } else {
            setErrorRAM(false);
        }
    }

    return (
        <div className="settings-input">
            <div className="controls-title">
                General Settings
            </div>
            <div className="controls-text">
                Configure the virtual machine hardware.
            </div>
            <TextField id="outlined-basic"
                       sx={styles}
                       color="#5F3196"
                       type="number"
                       error={errorCPU}
                       value={cpu}
                       onChange={(e) => changeCPU(e.target.value)}
                       label="CPU"
                       helperText={!errorCPU ? "Enter number of processors up to 12" : "Number of processors must be up to 12"}
                       variant="outlined"/>
            <FormControlLabel control={<Checkbox sx={{
                color: "#5F3196",
                '&.Mui-checked': {
                    color: "#5F3196",
                },
            }}/>} label="Enable virtualized CPU performance counters" />
            <TextField id="outlined-basic"
                       sx={styles}
                       color="#5F3196"
                       type="number"
                       error={errorRAM}
                       value={ram}
                       onChange={(e) => changeRAM(e.target.value)}
                       label="RAM"
                       helperText={!errorRAM ? "Enter memory amount up to 50GB" : "Enter memory amount up to 50GB"}
                       variant="outlined"/>
            <ProgressBar ram={ram}/>
            <div className="btn-wrapper">
                <div className="btn-back"
                     onClick={() => onSetStatus('naming')}>
                    Back
                </div>
                <Button component="div"
                        onClick={() => onSetStatus('appling')}
                        disabled={!cpu || !ram || errorCPU || errorRAM}
                        style={{
                            borderRadius: 40,
                            backgroundColor: "#5F3196",
                        }}
                        variant="contained">
                    Next
                </Button>
            </div>
        </div>
    );
}
