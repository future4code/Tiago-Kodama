import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { StyledForm } from './styled'

export default function Form({title, inputs, onsubmit, form}){
    return (
        <StyledForm>
            <h2>{title}</h2>
            <form autoComplete="off" onSubmit={onsubmit}>
                {inputs.map(input => (
                        <TextField 
                            key={input.label}
                            label={input.label}
                            name={input.label}
                            type={input.type} 
                            variant="outlined" 
                            onChange={input.command}
                            value={form[input.label]}
                            required
                        />
                ))}
                <Button 
                    type='submit'
                    variant="contained" 
                    color="primary"
                >Enter</Button>
            </form>
        </StyledForm>
    );
}
