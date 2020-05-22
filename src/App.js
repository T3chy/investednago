import React, {useState} from 'react';
// AV key 6ZW29MUK1OBHL2ZD
// IEX token pk_ad94bab71ebf450c83c1ae8095fb8f53 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import StockRow from './getstock.js';
import StockTable from './stockTable.js'
import AddStockForm from './addStockForm';
function App() {
  const [unit,setUnit] = useState('days')
  const [num,setNum] = useState('1')
  const [thenDate,setThenDate] = useState(getThenDate(0,'hours'))
  var stocks = [];
  const addStock = (stockData) => {
    const newStockList = [stockData, ...stocks]
      stocks = newStockList;
     
  };

  function getThenDate(unit,num) {
    var today = new Date()
    if (unit === "days"){
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
    return (yyyy+ mm+ dd);
    
  }

  return (
    <div>

    <h1 className="Title">
      If Only I had Invested in (x) (n) ago!
    </h1>
    <div className="stonksBox">
      <h1>
    Your Dream Portfolio <input type="number" id="timeNumInput" placeholder="time" onChange={e => {setNum(e.target.value);setThenDate(getThenDate(unit,e.target.value));}}></input> 
    <select id="timeUnit" onChange={ (e)=> {setUnit(e.target.value); getThenDate(e.target.value,num);setThenDate(getThenDate(unit,e.target.value));}}>
  <option selected alue="days">days</option>
  <option value="years">years</option>
  <option value="decades">decades</option>
</select> ago
<br />

<div>
</div>
      </h1>
    </div>
    <div className="container">
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Ticker</th>
            <th>Quantity</th>
            <th>Price Then</th>
            <th>Price Now</th>
            <th>Gain/Loss</th>
          </tr>
        </thead>
      </table>
    <div>
    <br>
    </br>
    <AddStockForm onSubmit={addStock} /></div>

    </div>
 <div>
 <StockTable stocks={stocks}/>
 </div>
    </div>

);
}

export default App;
