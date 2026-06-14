const TextTrades = () => {
  return (
    <ul className="list">
      <li className="list-item">
        trades, by default, are sent <span className="bold">stamped</span>. can
        do tracked if requested <span className="gray">(</span>
        <span className="italic gray sub-note">
          both sides must send tracked
        </span>
        <span className="gray">)</span>.
      </li>
      <li className="list-item">
        prefer doing tracked for high value trades{" "}
        <span className="gray">(</span>
        <span className="italic gray sub-note">
          ex., expensive or rare cards, signed items
        </span>
        <span className="gray">)</span>
      </li>
      <li className="list-item">
        i expect a video of the item under direct light or your flash on and
        packaging + address confirmation for all trades
      </li>
      <li className="list-item">
        if you have{" "}
        <span className="colored">less than 10 recent clickable proofs</span>, i
        might ask you to send out first. once i've received your mail, i'll send
        out as i'm able to
      </li>
      <li>
        <span className="highlighted bold">
          preferably no backing out after address confirmation
        </span>
      </li>
      <li>
        <span className="bold">
          please add a ✨ emoji anywhere in your dm if you're interested in
          trading so i know you've read through my trading info
        </span>
      </li>
    </ul>
  );
};

export default TextTrades;
