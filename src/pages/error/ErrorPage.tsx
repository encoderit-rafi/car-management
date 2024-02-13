import { Button } from "@/components/ui/button";
import { NavLink, useRouteError } from "react-router-dom";
import { Home } from "lucide-react";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex items-center justify-center h-screen ">
      <div className="">
        <h1 className="text-5xl font-semibold">Oops!</h1>
        <p className="mt-5">Sorry, an unexpected error has occurred.</p>
        <NavLink to="/">
          <Button className="relative w-full mt-6">
            <Home className="absolute w-5 h-5 -translate-y-1/2 left-20 top-1/2" />
            <span>Home</span>
          </Button>
        </NavLink>
      </div>
    </div>
  );
}
