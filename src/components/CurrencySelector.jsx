import React, {Component} from "react";
import CODES from "../constants/codes";
import LONGNAMES from "../constants/longNames";

class CurrencySelector extends Component{
	
	constructor(props){
		super(props)
		this.selectorService = props.selectorService;
		this.longName = LONGNAMES["AED"];
	}
	
	sendUpdate(event){
		this.selectorService.emit(event.target.value);
		this.longName = LONGNAMES[event.target.value];
		this.forceUpdate();
	}
	
	render(){
		let options = []
		
		CODES.forEach(code => {
			options.push(<option value={code} key={code}>{code}</option>)
		});
		
		return (
			<div>
				<select onChange={this.sendUpdate.bind(this)}>
					{options}
				</select>
				<p id={"longform-" + this.props.side}>{this.longName}</p>
			</div>
		)
	}
	
}

export default CurrencySelector;