import React, {Component} from "react";
import CurrencySelector from "../components/CurrencySelector";
import CurrencyValue from "../components/CurrencyValue";
import SelectorService from "../models/SelectorService";
import InputService from "../models/InputService";

const selectorService = new SelectorService();
const inputService = new InputService();

class MainContainer extends Component{

	constructor(props){
		super(props);
		this.leftCurrency = null;
		this.rightCurrency = null;
		this.leftValue = 0;
		this.rightValue = 0;
	}

	updateLeftCurrency(currency){
		this.leftCurrency = currency;
	}

	updateRightCurrency(currency){
		this.rightCurrency = currency;
	}
	
	render(){
		const p = this.props;
		return(
			<div>
				<CurrencySelector rates={p.rates} selectorService={selectorService}/>
				<CurrencyValue value={this.leftValue} selectorService={selectorService} inputService={inputService}/>
				<CurrencySelector rates={p.rates} selectorService={selectorService}/>
				<CurrencyValue value={this.rightValue} selectorService={selectorService} inputService={inputService}/>
			</div>
			
		)
	}
	
}

export default MainContainer;