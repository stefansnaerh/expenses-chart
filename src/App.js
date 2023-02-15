import React from 'react';
import Balance from './components/balance';
import Graph from './components/Graph';
import Total from './components/Total';
import data from './data.json'
import './App.css';



const App = () => {

    const numbers = data.map(total => {
      return total.amount
    })


    return (
      <div className="App">
        <Balance/>
          <section className='main-card' aria-label='spending last seven days'>
            <h2 className='h1-main'>Spending - Last 7 days </h2>
            <table aria-label='graph for this weeks spending'>
              <tbody className='spending-graph'>
                {data.map(day =>
                  <Graph
                  data={day}
                  numbers={numbers} 
                  />
                  )}
              </tbody>
            </table>
            <span className='thin-line'></span>
            <Total/>
        </section>
      </div>
    );
}

export default App;
