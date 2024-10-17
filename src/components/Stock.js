import React from "react";

function Stock({ stock, onStockClick }) {
  return (
    <div className="card" onClick={onStockClick}>
      <div className="card-body">
        <h5 className="card-title">{stock.ticker}</h5>
        <p className="card-text">{stock.name}</p>
        <p className="card-text">Price: ${stock.price}</p>
      </div>
    </div>
  );
}

export default Stock;
