import React, {Component} from "react";
import UNICODE from "../constants/unicode";

class CurrencyValue extends Component{
	
	constructor(props){
		super(props);
		this.selectorService = props.selectorService;
		this.inputService = props.inputService;
		this.outputService = props.outputService;
		this.activeCurrency = "AED";
		this.currencyUnicode = '\u00A4  ';
		this.selectorSubscription = this.selectorService.currencies().subscribe(res => {
			let targetField = document.getElementById(this.props.side);
			let targetValue = targetField.value;
			targetValue = this.convertToEUR(targetValue);
			this.activeCurrency = res;
			this.currencyUnicode = UNICODE[res] ? UNICODE[res] + "  " : '\u00A4  ';
			document.getElementById(this.props.side + "unicode").textContent = this.currencyUnicode;
			targetValue = this.convertFromEUR(targetValue);
			targetField.value = targetValue.toFixed(2);
		});
		this.inputSubscription = this.inputService.values().subscribe(res => {
			const valueToUpdate = this.convertFromEUR(res);
			document.getElementById(this.props.side).value = valueToUpdate.toFixed(2);
		});
	}
	
	sendUpdate(event) {
		let valueToSend = this.convertToEUR(event.target.value);
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
			<span>
				<span id={this.props.side + "unicode"}>
					{this.currencyUnicode}
				</span>
				<input 
					id={this.props.side} 
					type="number" 
					min="0" 
					placeholder="0" 
					onChange={this.sendUpdate.bind(this)}
				/>
			</span>
		)
	}
	
}

export default CurrencyValue;