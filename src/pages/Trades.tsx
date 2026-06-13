import TextTrades from "../components/text/TextTrades";
import text from "./../assets/json/trades.json";

const Trades = () => {
  return (
    <div className="page-container" id="trades">
      <div className="page-heading">
        <span className="page-heading-text heading">{text.pageHeading}</span>
      </div>

      <div className="page-content">
        <TextTrades />
      </div>
    </div>
  );
};

export default Trades;
