import React, {Component} from "react";

class CurrencyValue extends Component{

    constructor(props){
        super(props);
        this.selectorService = props.selectorService;
        this.inputService = props.inputService;
        this.outputService = props.outputService;
        this.activeCurrency = "AED";
        this.selectorSubscription = this.selectorService.currencies().subscribe(res => {
                let targetField = document.getElementById(this.props.side);
                let targetValue = targetField.value;
                targetValue = this.convertToEUR(targetValue);
                this.activeCurrency = res
                targetValue = this.convertFromEUR(targetValue);
                targetField.value = targetValue.toFixed(2);
                console.log("receiving on " + props.side, res)
                console.log(this.activeCurrency);
            });
        this.inputSubscription = this.inputService.values().subscribe(res => {
                const valueToUpdate = this.convertFromEUR(res);
                document.getElementById(this.props.side).value = valueToUpdate.toFixed(2);
                console.log(valueToUpdate);
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

    convertFromEUR(value){
        const valueFromEUR = value * this.props.rates[this.activeCurrency];
        return valueFromEUR;
    }

    render(){
        return(
            <input id={this.props.side} type="number" min="0" placeholder={this.props.value} onChange={this.sendUpdate.bind(this)}/>
        )
    }

}

export default CurrencyValue;