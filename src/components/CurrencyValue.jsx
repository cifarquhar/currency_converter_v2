import React, {Component} from "react";

class CurrencyValue extends Component{

    render(){
        return(
            <input type="number" min="0" placeholder={this.props.value}/>
        )
    }

}

export default CurrencyValue;