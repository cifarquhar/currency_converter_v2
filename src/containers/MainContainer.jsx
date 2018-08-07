import React, {Component} from "react";
import CurrencySelector from "../components/CurrencySelector";
import CurrencyValue from "../components/CurrencyValue";

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
				<CurrencySelector rates={p.rates} onChange={this.updateLeftCurrency.bind(this)}/>
				<CurrencyValue value={this.leftValue}/>
				<CurrencySelector rates={p.rates} onChange={this.updateRightCurrency.bind(this)}/>
				<CurrencyValue value={this.rightValue}/>
			</div>
			
		)
	}
	
}

export default MainContainer;