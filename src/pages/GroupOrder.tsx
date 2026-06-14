import TextGo from "../components/text/TextGo";
import PageWrapper from "./common/PageWrapper";
import text from "../assets/json/page_heading.json";

const GroupOrder = () => {
  return (
    <PageWrapper id="go" heading={text.groupOrder}>
      <TextGo />
    </PageWrapper>
  );
};

export default GroupOrder;
