import {
  CarFront,
  Car,
  LogOut,
  UsersRound,
  ChevronDown,
  UserRoundCog,
  LockKeyhole,
  UserRound,
} from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export default function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen ">
        <nav className="flex items-center justify-between px-6 py-2">
          <span className="flex items-center space-x-3 text-3xl font-bold ">
            <Car className="w-12 h-12" />
            <span>Cars management</span>
          </span>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center justify-center px-3 py-1 space-x-3 rounded-md cursor-pointer hover:bg-slate-100">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>

                  <ChevronDown />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 mr-5">
                <DropdownMenuGroup>
                  <NavLink to="profile">
                    <DropdownMenuItem>
                      <UserRound className="w-4 h-4 mr-2" />
                      <span>My profile</span>
                    </DropdownMenuItem>
                  </NavLink>
                  <NavLink to="edit-profile">
                    <DropdownMenuItem>
                      <UserRoundCog className="w-4 h-4 mr-2" />
                      <span>Edit profile</span>
                    </DropdownMenuItem>
                  </NavLink>
                  <NavLink to="change-password">
                    <DropdownMenuItem>
                      <LockKeyhole className="w-4 h-4 mr-2" />
                      <span>Change password</span>
                    </DropdownMenuItem>
                  </NavLink>
                  <DropdownMenuItem>
                    <LogOut className="w-4 h-4 mr-2" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
        <div className="flex flex-1">
          <aside className="flex flex-col flex-1 max-w-64 ">
            <ul className="flex-1">
              <NavLink to="/users">
                <li className="flex items-center px-6 py-2 space-x-3 hover:bg-neutral-100 hover:cursor-pointer">
                  <UsersRound className="w-5 h-5" />
                  <span>Users</span>
                </li>
              </NavLink>
              <NavLink to="/cars">
                <li className="flex items-center px-6 py-2 space-x-3 hover:bg-neutral-100 hover:cursor-pointer">
                  <CarFront className="w-5 h-5" />
                  <span>Cars</span>
                </li>
              </NavLink>
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
