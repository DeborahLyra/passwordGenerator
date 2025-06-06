import { ArrowsCounterClockwise, CopySimple } from "phosphor-react";
import * as Slider from '@radix-ui/react-slider';
import { useState } from "react";


export function PasswordGenerator() {
    // O motivo de você precisar usar colchetes, como [5] 
    // em vez de apenas 5, é porque o componente Slider do Radix 
    // UI é multivalorado por padrão — ou seja, ele espera um array 
    // de números, mesmo que tenha apenas um valor (como [5] em vez de 5).
    const [charNumber, setCharNumber] = useState([0])

    return (
        <main className="bg-white p-4 w-[400px] md:w-[600px] rounded-b-md">


            <div className="flex justify-center items-center gap-2 mb-2">
                <div className="w-full px-2 border-cyan-600 border-3 rounded-md flex items-center justify-between">
                    <input type="text" className="border-0 w-full rounded p-0.5 focus:outline-0" />

                    <ArrowsCounterClockwise size={30} color="#0891b2" className="cursor-pointer" />
                </div>
                <CopySimple size={32} color="#0891b2" className="cursor-pointer" />
            </div>
            <h2 className="text-cyan-800 font-semibold text-lg mt-4 mb-2">Personalize your Password</h2>
            <div>
                <p className="text-cyan-800 font-light">Char number:  {charNumber}</p>
                <div>
                    <Slider.Root
                        className="relative flex items-center select-none touch-none w-full h-5"
                        defaultValue={[5]}
                        value={charNumber}
                        onValueChange={setCharNumber}
                        max={20}
                        step={1}
                    >
                        <Slider.Track className="bg-gray-300 relative grow rounded-full h-[8px]">
                            <Slider.Range className="absolute bg-cyan-600 rounded-full h-full" />
                        </Slider.Track>
                        <Slider.Thumb
                            className="block w-4 h-4 bg-white border-2 border-cyan-600 rounded-full shadow hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                            aria-label="Volume"
                        />
                    </Slider.Root>






                </div>
                <div className="flex flex-col justify-center items-start">
                    <p className="text-cyan-800 font-light">What do you want to add in your password?</p>
                    <label className="flex justify-center gap-1">
                        <input type="checkbox" className="bg-cyan-600" />
                        <span className="font-light text-slate-700">Lowercase letters</span>
                    </label>
                    <label className="flex justify-center gap-1">
                        <input type="checkbox" className="bg-cyan-600" />
                        <span className="font-light text-slate-700">Uppercase letters</span>
                    </label>
                    <label className="flex justify-center gap-1">
                        <input type="checkbox" className="bg-cyan-600" />
                        <span className="font-light text-slate-700">Numbers</span>
                    </label>
                    <label className="flex justify-center gap-1">
                        <input type="checkbox" className="bg-cyan-600" />
                        <span className="font-light text-slate-700">Symbols</span>
                    </label>
                </div>
            </div>
        </main>
    )
}
