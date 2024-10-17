import React from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({
  stocks,
  portfolio,
  addStockToPortfolio,
  removeStockFromPortfolio,
  setSortType,
  setFilterType
}) {
  return (
    <div>
      <SearchBar setSortType={setSortType} setFilterType={setFilterType} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} onStockClick={addStockToPortfolio} />
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={portfolio} onStockClick={removeStockFromPortfolio} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
