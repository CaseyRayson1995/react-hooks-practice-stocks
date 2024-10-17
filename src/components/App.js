import React, { useState, useEffect } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [sortType, setSortType] = useState("Alphabetically");
  const [filterType, setFilterType] = useState("All");

  useEffect(() => {
    fetch("http://localhost:3000/stocks")
      .then((resp) => resp.json())
      .then((data) => setStocks(data));
  }, []);

  const addStockToPortfolio = (stock) => {
    if (!portfolio.find((s) => s.id === stock.id)) {
      setPortfolio([...portfolio, stock]);
    }
  };

  const removeStockFromPortfolio = (stockToRemove) => {
    setPortfolio(portfolio.filter((stock) => stock.id !== stockToRemove.id));
  };

  const sortedStocks = [...stocks].sort((a, b) => {
    if (sortType === "Alphabetically") {
      return a.ticker.localeCompare(b.ticker);
    } else {
      return a.price - b.price;
    }
  });

  const filteredStocks = filterType === "All"
    ? sortedStocks
    : sortedStocks.filter(stock => stock.type === filterType);

  return (
    <div>
      <Header />
      <MainContainer
        stocks={filteredStocks}
        portfolio={portfolio}
        addStockToPortfolio={addStockToPortfolio}
        removeStockFromPortfolio={removeStockFromPortfolio}
        setSortType={setSortType}
        setFilterType={setFilterType}
      />
    </div>
  );
}

export default App;
