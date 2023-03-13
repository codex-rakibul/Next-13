import Head from "next/head";
import Image from "next/image";
import { Fahkwang, Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";
import { useSession, getSession, signOut } from "next-auth/react";
import { Button } from "antd";

export default function Home() {
  const { data: session } = useSession();

  function handleSignOut() {
    signOut();
  }

  return (
    <>
      <Head>
        <title>Next Auth App</title>
      </Head>
      {session ? AuthUser({ session, handleSignOut }) : Guest()}
    </>
  );
}

function Guest() {
  return (
    <main className="container mx-auto text-center py-20">
      <h1 className="text-4xl font-bold ">Guest Homepage</h1>
      <div className="flex justify-center m-4">
        <img
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAMdQGhXvR7HXYBN66HdbvcK4wQVipNpNphA&usqp=CAU"
          }
          height={200}
          width="310"
        ></img>
      </div>
      <div className="flex justify-center">
        <Link href={"/login"}>
          <Button type="primary" className="bg-blue-800" block>Sign in</Button>
        </Link>
      </div>
    </main>
  );
}

function AuthUser({ session, handleSignOut }) {
  return (
    <main className="container mx-auto text-center py-20">
      <h1 className="text-4xl font-bold ">AuthUser Homepage</h1>
      <div className="details">
        <h2>{session.user.name}</h2>
        <h2>{session.user.email}</h2>
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleSignOut}
          className="text-white bg-blue-700 px-4 py-2 rounded-md"
        >
          Sign Out
        </button>
      </div>
      <div className="flex justify-center">
        <Link href={"/profile"}>Profile Page</Link>
      </div>
    </main>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  // if(!session){
  //   return {
  //     redirect: {
  //       destination: "/login",
  //       permanent: false
  //     }
  //   }
  // }

  return {
    props: {
      session,
    },
  };
}
