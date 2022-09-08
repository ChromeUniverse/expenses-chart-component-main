import React from 'react'
import data from '../data.json'

function Graph() {

  const maxAmount = Math.max(...data.map(entry => entry.amount))

  return (
    <div className="content-graph">
      {         
        data.map((entry) => {
          
          const amountStyle = { bottom: `calc(100% + 5px)` };
          let barSytle = { height: entry.amount / maxAmount * 100 + '%' };

          return (
            <div className="content-graph-entry">
              <div
                className={`content-graph-bar ${
                  entry.day === "wed" && "content-graph-bar-highlight"
                }`}
                style={barSytle}
              >
                <div className="content-graph-entry-amount" style={amountStyle}>
                  ${entry.amount}
                </div>
              </div>
              <p className="content-graph-bar-caption">{entry.day}</p>
            </div>
          );
        })
      }
    </div>
  )
}

export default Graph