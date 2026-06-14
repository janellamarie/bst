import PageWrapper from "./common/PageWrapper";
import text from "./../assets/json/page_heading.json";
import PaymentCard from "./PaymentCard";
import payment from "./../assets/json/payment_info.json";

const PaymentMethods = () => {
  return (
    <PageWrapper id="payments" heading={text.paymentMethods}>
      <div className="payment-methods-list-container">
        {payment.methods.map((method) => {
          return (
            <PaymentCard
              name={method.name}
              link={method.link}
              icon={method.icon}
            />
          );
        })}
      </div>
      <ul>
        <li className="list-item">
          you will be given emoji(s) to send as a note with your payment
        </li>
        <li className="list-item">
          <span className="bold">
            please do NOT write your username or the items you're paying for on
            the payment note
          </span>
        </li>
        <li className="list-item">
          paypal is the preferred payment method for group orders
        </li>
      </ul>
      <div className="subheading">
        <div className="col-wrapper">
          <span className="subheading-title-text">shipping fees</span>
          <span className="gray italic">
            shipping fees below may increase depending on the number of items
            being shipped to you
          </span>
        </div>

        <ul>
          <li className="list-item">
            <span className="heavy colored">stamped</span>: starts at{" "}
            <span className="bold">$1.20</span>{" "}
            <span className="gray italic sub-note">
              (using non-machinable stamp)
            </span>
          </li>
          <li className="list-item">
            <span className="heavy colored">tracked</span>: starts at{" "}
            <span className="bold">$4.30</span>{" "}
            <span className="gray italic sub-note">
              (labels printed using pirateship)
            </span>
          </li>
        </ul>
      </div>
    </PageWrapper>
  );
};

export default PaymentMethods;
