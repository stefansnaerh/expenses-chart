
import React from "react";



const Graph = (props) => {


    const classBar = "-bar"
  
    // getting the day of the week to toggle class
    const weekday = ["sun","mon","tue","wed","thu","fri","sat"];
    const date = new Date()
    let day = weekday[date.getDay()]
    return (
      <tr id={props.data.day} aria-label={`${props.data.day} spending data`}>
        <td className='amount' aria-label={`${props.data.amount} dollars spent on this week ${props.data.day}`}>${props.data.amount}</td>
        <td style={{"height":`${props.data.amount * 3}px`}} className={day === props.data.day ? 'today' : props.data.day + classBar}></td>
        <th>{props.data.day}</th>
      </tr>
    )
  }
  
export default Graph  