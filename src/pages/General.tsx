import TextGeneral from "../components/text/TextGeneral";
import text from "./../assets/json/general.json";

const General = () => {
  return (
    <div className="page-container" id="general">
      <div className="page-heading">
        <span className="page-heading-text heading">{text.pageHeading}</span>
      </div>

      <div className="page-content">
        <TextGeneral />
      </div>
    </div>
  );
};

export default General;
