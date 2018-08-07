import React, {Component} from "react";

class CurrencyValue extends Component{

    constructor(props){
        super(props);
        this.selectorService = props.selectorService;
        this.inputService = props.inputService;
        this.outputService = props.outputService;
        this.activeCurrency = "AED";
        this.selectorSubscription = this.selectorService.currencies().subscribe(res => {
                this.activeCurrency = res
                console.log("receiving on " + props.side, res)
                console.log(this.activeCurrency);
            });
        this.inputSubscription = this.inputService.values().subscribe(res => {
                let valueFromEUR = res * this.props.rates[this.activeCurrency];
                document.getElementById(this.props.side).value = valueFromEUR.toFixed(2);
                console.log(valueFromEUR);
            });
    }

    sendUpdate(event) {
        let valueToSend = this.convertToEUR(event.target.value);
        console.log(valueToSend);
        this.outputService.emit(valueToSend);
    }

    convertToEUR(value){
        const valueToEUR = value / this.props.rates[this.activeCurrency];
        return valueToEUR;
    }

    render(){
        return(
            <input id={this.props.side} type="number" min="0" placeholder={this.props.value} onChange={this.sendUpdate.bind(this)}/>
        )
    }

}

export default CurrencyValue;