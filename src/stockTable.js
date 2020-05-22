import React, {Component} from 'react';
import StockRow from './getstock.js';

class StockTable extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
      }
      componentDidMount (){
          console.log("mounted")
      }
      useEffect () {
          console.log("help")
        console.log(this.props.stocks.map(stock =>(<StockRow ticker={stock.ticker} thenDate={this.props.thenDate}/>)))
      }
      render () {
          return <div>{JSON.stringify(this.props.stocks)}</div>
          
      }
}

export default StockTable;