import React, {useState} from 'react';
import './nameInput.scss';
import TextField from "@mui/material/TextField";
import {Button} from "@mui/material";

export default function NameInput({onSetName, name, onSetStatus}) {
    const [errorName, setErrorName] = useState(false);

    const changeName = (name) => {
        onSetName(name);
        if(name.length > 20) {
            setErrorName(true);
        } else if(name.length > 0 && name.length < 20) {
            setErrorName(false);
        }
    }

    return (
        <div className="name-input">
            <div className="controls-title">
                Select a name
            </div>
            <div className="controls-text">
                A virtual machine requires storage so that you can install an operating system.
            </div>
            <TextField id="outlined-basic"
                       sx={{width: '100%',
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
                       }}
                       error={errorName}
                       value={name}
                       onChange={(e) => changeName(e.target.value)}
                       label="Name"
                       helperText={!errorName ? "Enter unique name up to 20 characters" : "Name is too long"}
                       variant="outlined"/>
            <div className="btn-wrapper">
                <Button component="div"
                        onClick={() => onSetStatus('settings')}
                        disabled={!name || errorName}
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
