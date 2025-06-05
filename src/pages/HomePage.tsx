import { Navbar } from "../components/Navbar";
import { PasswordGenerator} from "../components/PasswordGenerator";


export function HomePage() {
  return (
    <div className="h-full flex flex-col items-center justify-center mt-[50%] md:mt-[10%]">
      <Navbar/> 
      <PasswordGenerator/>
    </div>
  )
}
