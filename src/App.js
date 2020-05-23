import React from 'react';
// AV key 6ZW29MUK1OBHL2ZD
// IEX token pk_ad94bab71ebf450c83c1ae8095fb8f53 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AddStockForm from './addStockForm';
import StockRow from './getstock';
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    stocks: [],
    unit: "days",
    num: 1,
    thenDate: this.getThenDate(0,'days'),

  };
  }

  getThenDate(num,unit) {
    console.log("num:" + num + "unit" + unit)
    var today = new Date()
    if (unit === "days"){
      console.log(num + 'days subtracted' )
      today.setDate(today.getDate()-num);
    }
    else if (unit === "months"){
      today.setMonth(today.getMonth() - num)
    }
    else if (unit === "years"){
      today.setFullYear(today.getFullYear()- num)
    }
    else if (unit === "decades"){
      today.setFullYear(today.getFullYear - (num*10))
    }
    var dd = today.getDate();
    var mm = today.getMonth()+1; //As January is 0.
    var yyyy = today.getFullYear();
    if(dd<10) dd='0'+dd;
    if(mm<10) mm='0'+mm;
    console.log(yyyy+ mm+ dd)
    return (yyyy+ mm+ dd);
    
  }


addStock = (stockData) => {
  const newStockList = [stockData, ...this.state.stocks]
   this.setState({
     stocks: newStockList
   })
  };
getTotalGL() {
  var t = document.getElemenetById("table")
  console.log(t)
}


  render () { return (
    <div>

    <h1 className="Title">
      If Only I had Invested in (x) (n) ago!
    </h1>
    <div className="stonksBox">
      <h1>
    Your Dream Portfolio <input type="number" id="timeNumInput" placeholder="1" onChange={e => {this.setState({num:e.target.value});}}></input> 
    <select id="timeUnit" defaultValue="days" value={this.unit}>
  <option value="days">day(s)</option>
  <option value="years">year(s)</option>
  <option value="decades">decade(s)</option>
</select> ago
<br />

<div>
</div>
      </h1>
    </div>
    <div className="container">
      <table id="table" className="table mt-5">
        <thead>
          <tr>
            <th>Ticker</th>
            <th>Quantity</th>
            <th>Price Then</th>
            <th>Price Now</th>
            <th>Gain/Loss</th>
          </tr>
        </thead>
        <tbody onChange={this.getTotalGL}>
        {this.state.stocks.map(stock =><StockRow ticker={stock.ticker} quantity={stock.quantity} key={stock.id} fromDate={this.getThenDate(this.state.num,this.state.unit)}/>)}
        </tbody>
      </table>
    <div>
    <br>
    </br>
    {this.getTotalGL}
    <AddStockForm onSubmit={this.addStock} /></div>

    </div>
 <div>
 
 </div>
    </div>

);
}
}
export default App;
