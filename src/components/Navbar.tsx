import { ArrowsCounterClockwise } from "phosphor-react";


export function Navbar() {
  return (
    <nav className="w-[600px] p-4 flex items-center justify-between bg-cyan-600">
      <h1 className="font-bold text-xl">Password Generator</h1>
      <ArrowsCounterClockwise size={24} />
    </nav>
  )
}
