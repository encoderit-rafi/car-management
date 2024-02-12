import { CarFront, LogOut, UsersRound } from "lucide-react";
import { Outlet } from "react-router-dom";
export default function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen ">
        <nav className="px-6 py-2 ">nav</nav>
        <div className="flex flex-1">
          <aside className="flex flex-col flex-1 max-w-64 ">
            <ul className="flex-1">
              <li className="flex items-center px-6 py-2 space-x-3 hover:bg-neutral-100 hover:cursor-pointer">
                <UsersRound className="w-5 h-5" />
                <span>Users</span>
              </li>
              <li className="flex items-center px-6 py-2 space-x-3 hover:bg-neutral-100 hover:cursor-pointer">
                <CarFront className="w-5 h-5" />
                <span>Cars</span>
              </li>
            </ul>
            <li className="flex items-center px-6 py-2 space-x-3 hover:bg-neutral-100 hover:cursor-pointer">
              <LogOut className="w-5 h-5" />
              <span>Log out</span>
            </li>
          </aside>
          <main className="flex-1 px-6 py-2 ">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
