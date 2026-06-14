import { motion } from "motion/react";

export interface PaymentCardProps {
  name: string;
  description?: string;
  link: string;
  icon?: string;
}

const PaymentCard = ({ name, description, link, icon }: PaymentCardProps) => {
  return (
    <motion.div
      className="payment-card-container"
      onClick={() => window.open(link, "_blank")}
      whileTap={{ scale: 0.9 }}
    >
      {icon && <img className="payment-card-icon" src={icon} />}
      <span className="payment-method-name">{name}</span>
      {description && <span>{description}</span>}
    </motion.div>
  );
};

export default PaymentCard;
