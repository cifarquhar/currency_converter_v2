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
	
	render(){
		const p = this.props;
		return(
			<div>
				<CurrencySelector rates={p.rates} />
				<CurrencyValue value={this.leftValue}/>
				<CurrencySelector rates={p.rates} />
				<CurrencyValue value={this.rightValue}/>
			</div>
			
		)
	}
	
}

export default MainContainer;