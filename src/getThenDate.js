import React, { Component} from react;
class getThenDate extends React.Component {
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
            console.log(today)
            if(dd<10) dd='0'+dd;
            if(mm<10) mm='0'+mm;
            return yyyy + mm + dd;
          }}
        
        }