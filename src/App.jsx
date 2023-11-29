import { Outlet } from "react-router-dom";
import SideNav from "./Shared/SideNav";

function App() {
  return (
    <>
      <div className="flex">
        <div className="fixed left-0 h-screen">
          <SideNav />
        </div>
        <div className="ml-10 flex-1">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
