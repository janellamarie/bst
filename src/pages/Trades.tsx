import TextTrades from "../components/text/TextTrades";
import text from "./../assets/json/page_heading.json";
import PageWrapper from "./common/PageWrapper";

const Trades = () => {
  return (
    <PageWrapper id="trades" heading={text.trades}>
      <TextTrades />
    </PageWrapper>
  );
};

export default Trades;
