import React from 'react';
import {
    Input, 
    Button, 
    SquareDown
} from './style';

const InputAddOn = ({inputValue, onChange, btnClick}) => {
    return(
        <div>
            <Input onChange={onChange} value={inputValue} type="text"/>
            <Button onClick={btnClick} type="submit"><SquareDown /></Button>
        </div>
    );
    
}

export default InputAddOn;