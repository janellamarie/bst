export interface PaymentCardProps {
  name: string;
  description?: string;
  link: string;
  icon?: string;
}

const PaymentCard = ({ name, description, link, icon }: PaymentCardProps) => {
  return (
    <div
      className="payment-card-container"
      onClick={() => window.open(link, "_blank")}
    >
      {icon && <img className="payment-card-icon" src={icon} />}
      <span className="payment-method-name">{name}</span>
      {description && <span>{description}</span>}
    </div>
  );
};

export default PaymentCard;
