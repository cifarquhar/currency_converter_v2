import React, {Component} from "react";
import { Panel, Grid, Row, Col } from "react-bootstrap";
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
				<h1>Currency Converter</h1>
				<h3>Select a currency from each dropdown and enter a value to convert</h3>
				<Grid>
					<Row>
						<Col xs={5}>
							<Panel style={{
								padding: "10px"
								}}>
								<CurrencySelector
									side={"left"}  
									rates={p.rates} 
									selectorService={leftSelectorService}
								/>
								<CurrencyValue 
									side={"left"} 
									rates={p.rates} 
									selectorService={leftSelectorService} 
									outputService={leftInputService} 
									inputService={rightInputService}
								/>
							</Panel>
						</Col>
						<Col xs={2}>
							<span className="glyphicon glyphicon-arrow-left"></span>
							<span className="glyphicon glyphicon-arrow-right"></span>
						</Col>
						<Col xs={5}>
							<Panel style={{
								padding: "10px"
							}}>
								<CurrencySelector 
									side={"right"} 
									rates={p.rates} 
									selectorService={rightSelectorService}
								/>
								<CurrencyValue 
									side={"right"} 
									rates={p.rates} 
									selectorService={rightSelectorService} 
									outputService={rightInputService} 
									inputService={leftInputService}
								/>
							</Panel>
						</Col>
					</Row>
				</Grid>
			</div>
			
		)
	}
	
}

export default MainContainer;