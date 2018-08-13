import React, {Component} from "react";
import { Panel } from "react-bootstrap";
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
				<Panel>
					<Panel.Heading>Title</Panel.Heading>
					<Panel.Body>
						<CurrencySelector rates={p.rates} selectorService={leftSelectorService}/>
						<CurrencyValue side={"left"} rates={p.rates} value={this.leftValue} selectorService={leftSelectorService} outputService={leftInputService} inputService={rightInputService}/>
					</Panel.Body>
				</Panel>
				<Panel>
					<Panel.Heading>Title</Panel.Heading>
					<Panel.Body>
						<CurrencySelector rates={p.rates} selectorService={rightSelectorService}/>
						<CurrencyValue side={"right"} rates={p.rates} value={this.rightValue} selectorService={rightSelectorService} outputService={rightInputService} inputService={leftInputService}/>
					</Panel.Body>
				</Panel>
			</div>
			
		)
	}
	
}

export default MainContainer;