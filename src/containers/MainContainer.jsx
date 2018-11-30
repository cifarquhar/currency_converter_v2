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

	constructor(){
		super()
		this.state = {
			loaded: false,
			content: null
		}
	}
	
	componentDidMount(){
		fetch("http://data.fixer.io/api/latest?access_key=" + process.env.REACT_APP_API_KEY)
			.then(res => res.json())
			.then(res => this.setState({loaded: true, content: res}))
	}
	
	updateLeftCurrency(currency){
		this.leftCurrency = currency;
	}
	
	updateRightCurrency(currency){
		this.rightCurrency = currency;
	}
	
	render(){
		const {loaded, content} = this.state;

		return(

			loaded ?

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
									rates={content.rates} 
									selectorService={leftSelectorService}
								/>
								<CurrencyValue 
									side={"left"} 
									rates={content.rates} 
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
									rates={content.rates} 
									selectorService={rightSelectorService}
								/>
								<CurrencyValue 
									side={"right"} 
									rates={content.rates} 
									selectorService={rightSelectorService} 
									outputService={rightInputService} 
									inputService={leftInputService}
								/>
							</Panel>
						</Col>
					</Row>
				</Grid>
			</div>

			: <div>Loading...</div>
			
		)
	}
	
}

export default MainContainer;