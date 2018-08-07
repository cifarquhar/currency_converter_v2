import React, {Component} from "react";
import CurrencySelector from "../components/CurrencySelector";
import CurrencyValue from "../components/CurrencyValue";

class MainContainer extends Component{
	
	render(){
		const p = this.props;
		return(
			<div>
				<CurrencySelector rates={p.rates} />
				<CurrencyValue />
				<CurrencySelector rates={p.rates} />
				<CurrencyValue />
			</div>
			
		)
	}
	
}

export default MainContainer;