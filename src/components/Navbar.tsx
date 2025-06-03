import { ArrowsCounterClockwise } from "phosphor-react";
import Lottie from 'react-lottie';
import animationData from '../assets/padlockAnimation.json'

export function Navbar() {
  return (
    <nav className="w-[600px] p-4 bg-white rounded-t-md">
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: animationData,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
          }
        }}
        height={100}
        width={100}
      />
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-2xl text-cyan-800">Password Generator</h1>
        <ArrowsCounterClockwise size={24}  />
      </div>
    </nav>
  )
}
