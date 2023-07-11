import Left from "./dashboardComponent/Left";
import Right from "./dashboardComponent/Right";
import "./dashboardHome.css";

export default function DashboardHome() {
  return (
    <div id="dashboardHome">
      <div id="left">
        <Left />
      </div>
      <div id="rightt">
        <Right />
      </div>
    </div>
  );
}
