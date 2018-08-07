import React, {Component} from "react";

class CurrencyValue extends Component{

    constructor(props){
        super(props);
        this.selectorService = props.selectorService;
        this.subscription = this.selectorService.currencies().subscribe(res => {
                // this.setState({ greeting: res });
                console.log(res)
            });
    }

    render(){
        return(
            <input type="number" min="0" placeholder={this.props.value}/>
        )
    }

}

export default CurrencyValue;