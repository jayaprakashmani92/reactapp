import { Router } from "react-router-dom";
import "../../styles/sidebar.css";
import { LayoutDashboard, Book, ChartArea, Users } from "lucide-react";
export default function Sidebar() {
  return (
    <aside className="sidebar-icons  bg-white">
      <div className="nav flex-column align-items-center gap-4">
        <ul className="ps-0 sidebars w-100">
          <li>
            <LayoutDashboard />
          </li>
          <li>
            <Book />
          </li>
          <li>
            <ChartArea />
          </li>
          <li>
            <Users />
          </li>
        </ul>
      </div>
    </aside>
  );
}
