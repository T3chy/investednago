import React, {Component} from 'react';
export default class StockTable extends Component {
    constructor(props){
        super(props)
        this.state = {
          stocks: []
        }
      }
      useEffect () {
          console.log("help")
        console.log(this.props.stocks.map(stock =>(<div>{stock.id}</div>)))
      }
      render () {
          return <div> {this.props.stocks}</div>
      }
}

