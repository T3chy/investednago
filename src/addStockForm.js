import React from 'react';
import shortid from 'shortid';
export default class AddStockForm extends React.Component {
    state = {
        ticker: '',
        quantity: ''
    }
    handleChange = (event) => {
        
        this.setState({
            [event.target.name]: event.target.value
        })
        
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            id: shortid.generate(),
            ticker: this.state.ticker,
            quantity: this.state.quantity
        });
        this.setState({
            ticker:"",
            quantity:""
        })
    }
    render() {
        console.log('rendered');
        return(
            
        <form onSubmit={this.handleSubmit}>
        <input name="ticker" value={this.state.ticker} onChange={this.handleChange} placeholder="ticker"></input>
        <input name="quantity" value={this.state.quantity} onChange={this.handleChange} placeholder="quantity"></input>
        <input type="submit" value="Submit" />
        </form>
        );}
}