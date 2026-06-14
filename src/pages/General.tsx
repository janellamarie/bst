import TextGeneral from "../components/text/TextGeneral";
import text from "./../assets/json/page_heading.json";
import PageWrapper from "./common/PageWrapper";

const General = () => {
  return (
    <PageWrapper id="general" heading={text.general}>
      <TextGeneral />
    </PageWrapper>
  );
};

export default General;
