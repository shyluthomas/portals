import Login from "@/components/screen/auth/login";
import { Metadata } from "next";

export const metData: Metadata = {
  title: 'Login page',
  description: 'Login page using next auth',
}

export default async function  LoginPage() {
 
  return (
    <Login />
  );
}
