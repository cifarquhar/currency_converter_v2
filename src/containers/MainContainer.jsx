import React, {Component} from "react";
import CurrencySelector from "../components/CurrencySelector";
import CurrencyValue from "../components/CurrencyValue";
import CommunicationService from "../models/CommunicationService";

const communicationService = new CommunicationService();

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
				<CurrencySelector rates={p.rates} communicationsService={communicationService}/>
				<CurrencyValue value={this.leftValue} communicationsService={communicationService}/>
				<CurrencySelector rates={p.rates} communicationsService={communicationService}/>
				<CurrencyValue value={this.rightValue} communicationsService={communicationService}/>
			</div>
			
		)
	}
	
}

export default MainContainer;