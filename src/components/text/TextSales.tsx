const TextSales = () => {
  return (
    <ul className="list">
      <li className="list-item">
        once i send my payment info, you have 48 hours to send payment.{" "}
        <span className="bold">
          if payment is not received within those 48 hours, your item will be
          put back up for sale{" "}
        </span>
        <span className="gray">(</span>
        <span className="italic gray">
          unless i've agreed to hold your items
        </span>
        <span className="gray">)</span>
      </li>
      <li className="list-item">
        i'm willing to hold onto items for a max of{" "}
        <span className="colored">two weeks</span>. if i haven't received any
        communication from you, i will assume you're no longer interested in the
        items and put them back up for sale
      </li>
      <li className="list-item">
        <span className="bold highlighted">
          all sales are final, no refunds once you've received the item
        </span>
      </li>
      <li>
        <span className="bold">
          please add a ⭐ emoji anywhere in your dm if you're interested in
          buying so i know you've read through my sales info.
        </span>
      </li>
    </ul>
  );
};

export default TextSales;
