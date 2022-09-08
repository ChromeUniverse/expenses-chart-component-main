import React from 'react'
import data from '../data.json'


function Graph() {
  return (
    <div className="content-graph">
      {         
        data.map((entry) => {
          
          const amountStyle = { bottom: `calc(100% + 5px)` };
          let barSytle = { height: entry.amount / 52.36 * 100 + '%' };

          // if (entry.day === 'wed') barSytle.backgroundColor = 'var(--cyan)';

          return (
            <div className='content-graph-entry'>              
              <div className={`content-graph-bar ${entry.day === 'wed' && 'content-graph-bar-highlight'}`} style={barSytle}>
                <div className='content-graph-entry-amount' style={amountStyle}>
                  ${entry.amount}
                </div>
              </div>
              <p className='content-graph-bar-caption'>{entry.day}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Graph