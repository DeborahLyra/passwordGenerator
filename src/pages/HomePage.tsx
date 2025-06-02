import { Navbar } from "../components/Navbar";
import { PassworGenerator } from "../components/PassworGenerator";


export function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center mt-[20%]">
      <Navbar/> 
      <PassworGenerator/>
    </div>
  )
}
