import { Navbar } from "../components/Navbar";
import { PasswordGenerator} from "../components/PasswordGenerator";


export function HomePage() {
  return (
    <div className=" flex flex-col items-center justify-center mt-[20%]">
      <Navbar/> 
      <PasswordGenerator/>
    </div>
  )
}
