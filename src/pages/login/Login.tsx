import { Avatar } from "@/components/ui/avatar";
import {
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
// import Link from "next/link"
import { Button } from "@/components/ui/button";
const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md space-y-8">
        <CardHeader>
          <div className="flex items-center justify-center">
            <Avatar
              alt="Company Logo"
              className="w-12 h-12"
              src="/placeholder.svg?height=100&width=100"
            />
            <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
              Sign in to your account
            </h2>
          </div>
        </CardHeader>
        <CardContent className="mt-8 space-y-6">
          <input name="remember" type="hidden" value="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <Label htmlFor="username">Username</Label>
              <Input
                autoComplete="username"
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                id="username"
                name="username"
                placeholder="Username"
                required
                type="email"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                autoComplete="current-password"
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                id="password"
                name="password"
                placeholder="Password"
                required
                type="password"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <Button className="w-full">Sign in</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
