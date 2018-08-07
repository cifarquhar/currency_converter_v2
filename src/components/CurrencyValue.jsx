import React, {Component} from "react";

class CurrencyValue extends Component{

    constructor(props){
        super(props);
        this.selectorService = props.selectorService;
        this.inputService = props.inputService;
        this.selectorSubscription = this.selectorService.currencies().subscribe(res => {
                // this.setState({ greeting: res });
                console.log(res)
            });
        this.inputSubscription = this.inputService.values().subscribe(res => {
            // this.setState({ greeting: res });
            console.log(res)
        });
    }

    sendUpdate(event) {
        this.inputService.emit(event.target.value)
    }

    render(){
        return(
            <input type="number" min="0" placeholder={this.props.value} onChange={this.sendUpdate.bind(this)}/>
        )
    }

}

export default CurrencyValue;