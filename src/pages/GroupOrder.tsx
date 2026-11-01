import TextGo from "../components/text/TextGo";
import PageWrapper from "./common/PageWrapper";
import text from "../assets/json/page_heading.json";
import { motion } from "motion/react";

const ML_URL =
  "https://app.notion.com/p/oreo_yeni-s-Group-Orders-Home-40557e145313807aaafccccee2464111?source=copy_link";

const GroupOrder = () => {
  return (
    <PageWrapper id="go" heading={text.groupOrder}>
      <TextGo />
      <div className="footer">
        <motion.div
          className="button"
          onClick={() => window.open(ML_URL, "_blank")}
        >
          masterlists
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default GroupOrder;
