import Card from "./Card";
import "./cards.css";

export default function Cards() {
  const cards = [
    { name: "Total Revenue", amount: "$1254", id: 1 },
    {
      name: "Harmony",
      amount: "$5432",
      id: 2
    },
    {
      name: "Bermuda",
      amount: "$3456",
      id: 3
    },
    {
      name: "Laxmi",
      amount: "$5678",
      id: 4
    }
  ];
  return (
    <div className="cards">
      {cards.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </div>
  );
}
