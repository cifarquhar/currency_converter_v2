import React, {Component} from "react";
import CurrencySelector from "../components/CurrencySelector";

class MainContainer extends Component{
	
	render(){
		const p = this.props;
		return(
			<div>
				<CurrencySelector rates={p.rates} />
				<CurrencySelector rates={p.rates} />
			</div>
			
		)
	}
	
}

export default MainContainer;