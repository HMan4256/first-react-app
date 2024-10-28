//import Image from "next/image";

"use client"
function MyButton() {
  function handleClick() {
    alert('Hello, world!');
  }

  return (
    <button onClick={handleClick} className="w-64 h-12 bg-slate-700 rounded-md uppercase text-lg transition delay-150 hover:bg-slate-600">
      Read more
    </button>
  )
}

function WelcomeCard() {
  return (
    <div className="container w-min h-min p-8 shadow-xl bg-slate-800 rounded-md">
      <h1 className="pb-5 w-64 text-center uppercase font-bold text-balance">My first ever app. Hope you enjoy!</h1>
      <p className="pb-5 text-slate-400">
        I honestly have no idea what I&apos;m doing.
      </p>
      <MyButton />
    </div>
  );
}

function SimpleNav() {
  return (
    <div className="bg-slate-800 h-20 w-full flex items-center justify-between p-10 shadow-md">
      <a href="#" className="text-center font-bold text-2xl flex-initial transition hover:text-white/75">MyFirstApp</a>
      <p className="text-white/25">Made by HManDEV</p>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <SimpleNav />
      <div className="flex h-screen items-center justify-center">
        <WelcomeCard />
      </div>
    </>
  );
}