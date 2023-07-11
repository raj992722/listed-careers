import "./card.css";

export default function Card(props) {
  return (
    <div className="card">
      <div className="card-icon">Icon</div>
      <div>{props.card.name}</div>
      <div>{props.card.amount}</div>
    </div>
  );
}
