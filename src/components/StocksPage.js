import { StockItem } from "./StockItem";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import actionCreators from "../actions/actionCreators";

export const StocksPage = () => {
  const stocksData = useSelector((state) => state.stockData);
  const selectedStock = useSelector((state) => state.selectedStock);

  const dispatch = useDispatch();
  const dropDownHandler = (e) =>
    dispatch(actionCreators.doUpdateSelectedStock(e.target.value));

  return (
    <div className="stock-page">
      <div className="stock-section">
        <select onChange={dropDownHandler}>
          <option>Select Company</option>
          {stocksData.map((stock, index) => (
            <option key={index}>{stock.company}</option>
          ))}
        </select>
      </div>

      <div className="stock-section">
        {selectedStock
          ? renderSelectedStockData(selectedStock, stocksData)
          : null}
      </div>
    </div>
  );
};

const renderSelectedStockData = (selectedStock, stocksData) => {
  return stocksData
    .filter((stock) => stock.company === selectedStock)
    .map((s, i) => <StockItem key={i} data={s}></StockItem>);
};
