import { usePrevious } from "../hooks/usePrevious";

export const StockItem = ({ data }) => {
  const prev = usePrevious(data);
  const isPriceUp = prev && prev.price < data.price;
  return (
    <div className="stock-item">
      <div>
        <strong>{`Company: `}</strong>
        <span>{data.company}</span>
      </div>
      <div>
        <strong>{`Price: `}</strong>
        <span className={isPriceUp ? "price-up" : "price-down"}>
          {data.price}
        </span>
      </div>
    </div>
  );
};
