import Image from 'next/image'
import Link from './Link'
import Window from './Window'
import { useState } from 'react';
export default function Main(){
  const [showWindow, setShowWindow] = useState(false);
  const [windowText, setWindowText] = useState("")
  const [windowName, setWindowName] = useState("")

  const handleShowWindow = () => {
    setShowWindow(true);
  };

  const handleHideWindow = () => {
    setShowWindow(false);
  };


  return(
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        David Sooley's Portfolio Site
      </div>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Link name="Profile" text="Find in-depth information about Next.js features and API." setWindowName={setWindowName} setWindowText={setWindowText} handleShowWindow={handleShowWindow} handleHideWindow={handleHideWindow}/>
        <Link name="Resume" text="Learn about Next.js in an interactive course with&nbsp;quizzes!" setWindowName={setWindowName} setWindowText={setWindowText} handleShowWindow= {handleShowWindow} handleHideWindow={handleHideWindow}/>
        <Link name="Projects" text="Explore the Next.js 13 playground." setWindowName={setWindowName} setWindowText={setWindowText} handleShowWindow= {handleShowWindow} handleHideWindow={handleHideWindow}/>
        <Link name="Contact" text="Instantly deploy your Next.js site to a shareable URL with Vercel." setWindowName={setWindowName} setWindowText={setWindowText} handleShowWindow= {handleShowWindow} handleHideWindow={handleHideWindow}/>
      </div>
      <Window isVisible={showWindow} name={windowName} text={windowText} handleHideWindow={handleHideWindow}/>
    </main>
  )
}