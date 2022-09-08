import React from "react";
import Graph from './Graph'

function Content() {
  return (
    <section className="content">
      <h2 className="content-title">Spending - Last 7 days</h2>
      <Graph />      
      <div className="content-footer">
      <hr />
        <p className="content-footer-title">Total this month</p>
        <div className="content-footer-flex">
          <p className="content-footer-expenses">$478.33</p>
          <p className="content-footer-stats">
            <p className="content-footer-stats-1">+2.4%</p>
            <p className="content-footer-stats-2">from last month</p>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Content;
