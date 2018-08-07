import React, {Component} from "react";

class CurrencyValue extends Component{

    constructor(props){
        super(props);
        this.selectorService = props.selectorService;
        this.inputService = props.inputService;
        this.outputService = props.outputService;
        this.activeCurrency = "AED";
        this.selectorSubscription = this.selectorService.currencies().subscribe(res => {
                // this.setState({ greeting: res });
                this.activeCurrency = res
            console.log("receiving on " + props.side, res)
            console.log(this.activeCurrency);
            });
        this.inputSubscription = this.inputService.values().subscribe(res => {
            // this.setState({ greeting: res });
            console.log("receiving on " + props.side, res)
        });
    }

    sendUpdate(event) {
        this.outputService.emit(event.target.value)
    }

    render(){
        return(
            <input type="number" min="0" placeholder={this.props.value} onChange={this.sendUpdate.bind(this)}/>
        )
    }

}

export default CurrencyValue;