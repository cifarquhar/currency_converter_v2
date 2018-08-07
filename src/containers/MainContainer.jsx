import React, {Component} from "react";
import CurrencySelector from "../components/CurrencySelector";
import CurrencyValue from "../components/CurrencyValue";
import SelectorService from "../models/SelectorService";
import InputService from "../models/InputService";

const leftSelectorService = new SelectorService();
const rightSelectorService = new SelectorService();
const leftInputService = new InputService();
const rightInputService = new InputService();

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
				<CurrencySelector rates={p.rates} selectorService={leftSelectorService}/>
				<CurrencyValue side={"left"} value={this.leftValue} selectorService={leftSelectorService} outputService={leftInputService} inputService={rightInputService}/>
				<CurrencySelector rates={p.rates} selectorService={rightSelectorService}/>
				<CurrencyValue side={"right"} value={this.rightValue} selectorService={rightSelectorService} outputService={rightInputService} inputService={leftInputService}/>
			</div>
			
		)
	}
	
}

export default MainContainer;