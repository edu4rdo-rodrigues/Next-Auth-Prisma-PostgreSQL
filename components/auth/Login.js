"use client"

import { signIn, signOut } from "next-auth/react"
import Image from "next/image";

import { BsPersonPlus } from "react-icons/bs"

export default ({ session }) => {
  return (
    <>
      {!session ? (
          <button 
            className="text-xl" 
            onClick={() => signIn("google")}
          >
            <BsPersonPlus />
            SignIn
          </button>
      ) : (
        <button onClick={() => signOut()}>
          <Image 
            className="object-fill h-12 w-12 rounded-full"
            src={session?.user?.image} 
            alt="foto de perfil" 
            width={100}
            height={100}
          />
        </button>
      )}
    </>
  );
};