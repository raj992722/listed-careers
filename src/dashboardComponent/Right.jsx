import Nav from "./Nav";
import "./right.css";
import Cards from "./Cards";
export default function Right() {
  return (
    <div id="right">
      <div className="nav">
        <Nav />
      </div>
      <div className="right-cards">
        <Cards />
      </div>
      <div className="right-graph">graph</div>
      <div>card</div>
    </div>
  );
}
