import TextSales from "../components/text/TextSales";
import PageWrapper from "./common/PageWrapper";
import text from "./../assets/json/page_heading.json";

const Sales = () => {
  return (
    <PageWrapper id="sales" heading={text.sales}>
      <TextSales />
    </PageWrapper>
  );
};

export default Sales;
