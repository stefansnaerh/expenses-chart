import React from "react"



const Total = () => {
    return (
      <div className='total-container'>
      <div className='this-month-total'>
        <h4>Total this month</h4>
        <h1 aria-label='total spent this month'>$478.33</h1>
      </div>
      <div className='this-month-total-percent'>
        <h3 aria-label='percentage from last month'>+2.4%</h3>
        <h4>from last month</h4>
      </div>
    </div>
    )
  }

  export default Total