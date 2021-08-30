import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { StyledForm } from './styled'

export default function Form({title, inputs, onsubmit}){
    return (
        <StyledForm>
            <h2>{title}</h2>
            <form noValidate autoComplete="off">
                {inputs.map(input => (
                        <TextField 
                            key={input.label}
                            label={input.label}
                            type={input.type} 
                            variant="outlined" 
                            onChange={input.command}
                        />
                ))}
                <Button 
                    type='submit'
                    variant="contained" 
                    color="primary"
                    onClick={onsubmit}   
                >Enter</Button>
            </form>
        </StyledForm>
    );
}
