import Login from "./auth/Login";
import { getServerSession } from "next-auth";
import { authOptions } from "../pages/api/auth/[...nextauth]";

export default async function Nav(){
  const session = await getServerSession(authOptions)
  return (
    <Login session={session} />
  );
};