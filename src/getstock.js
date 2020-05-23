import React, {Component} from 'react';
import {iex }from './config/iex.js'
class StockRow extends Component {
  constructor(props){
    super(props)
    this.state = {
      dataThen: {},
      data: {}
    }
  }
calcGL (quantity,thenPrice,nowPrice) {
  return Math.round(((quantity*thenPrice)-(quantity*nowPrice))*100)/100;
}
componentDidUpdate (prevProps){
  if (this.props.fromDate !== prevProps.fromDate){
  console.log(this.props.fromDate);
  //get da data here
  const url = `${iex.base_url}/stock/${this.props.ticker}/chart/1d?token=${iex.api_token}&exactDate=${this.props.fromDate}&chartLast=1`;
  console.log(url);
  fetch(url)
  .then((response) => response.json())
  .then((dataThen) => {
    console.log(dataThen);
  if (dataThen.length > 0) {
  this.setState({
    dataThen: dataThen[dataThen.length -1]})
  }});
}
else {
  console.log("didn't refresh b/c no change in date")
}
}

componentDidMount(){
  console.log(this.props.fromDate);
  //get da data here
  const url = `${iex.base_url}/stock/${this.props.ticker}/chart/1d?token=${iex.api_token}&exactDate=${this.props.fromDate}&chartLast=1`;
  console.log(url);
  fetch(url)
  .then((response) => response.json())
  .then((dataThen) => {
    console.log(dataThen);
    if (typeof dataThen !== 'undefined'){
    this.setState({
    dataThen: dataThen[dataThen.length -1]})
    } 
    
  });
  const newurl = `${iex.base_url}/stock/${this.props.ticker}/intraday-prices/1d?token=${iex.api_token}&chartLast=1`;
  console.log(newurl);
  fetch(newurl)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  this.setState({
    data: data[data.length -1]})
 });
    
  }





  render () {

    return <tr>
      <td>{this.props.ticker}</td>
      <td>{this.props.quantity}</td>
      <td>{"$" +this.state.dataThen.close}</td>
      <td>{"$" + this.state.data.close}</td>
      <td id="gl">{"$" +this.calcGL(this.props.quantity,this.state.dataThen.close,this.state.data.close)}</td>
      <script>
        {
         function me() {
          console.log("hi") 
          if (document.getElementById("gl").value > 0){
                document.getElementById("gl").style.color = "green"
              } else {
                document.getElementById("gl").style.color = "red"
              }
        }}
      </script>
    </tr>
  }


  
}
export default StockRow