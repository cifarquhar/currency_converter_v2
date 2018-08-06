import React, {Component} from "react";
import {FormGroup, FormControl} from "react-bootstrap";
import CODES from "../constants/codes";

class CurrencySelector extends Component{
    
    constructor(props){
        super(props)
    }
    
    render(){

        let options = []
        let counter = 0;
        
        CODES.forEach(code => {
            options.push(<option value={code} key={counter}>{code}</option>)
            counter +=1;
        });
        
        return (
            <select>
                {options}
            </select>
        )
    }
    
}

export default CurrencySelector;