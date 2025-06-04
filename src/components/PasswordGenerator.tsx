import { ArrowsCounterClockwise, CopySimple } from "phosphor-react";


export function PasswordGenerator() {


    return (
        <main className="bg-white p-4 w-[600px] rounded-b-md">

            <h2 className="text-cyan-800 font-semibold text-lg mb-4">Personalize your Password</h2>
            <div className="flex justify-center items-center gap-2 mb-2">
                <div className="w-full px-2 border-cyan-600 border-3 rounded-md flex items-center justify-between">
                    <input type="text" className="border-0 w-full rounded p-0.5 focus:outline-0" />

                    <ArrowsCounterClockwise size={30} color="#0891b2" className="cursor-pointer" />
                </div>
                <CopySimple size={32} color="#0891b2" className="cursor-pointer" />
            </div>
            <div>
                <p className="text-cyan-800 font-light">Char number</p>
                <div>

                </div>
                <div className="flex flex-col justify-center items-start">
                    <p className="text-cyan-800 font-light">What do you want to add in your password?</p>
                    <label className="flex justify-center gap-1">
                        <input type="checkbox" className="bg-cyan-600" />
                        <span className="font-light">Lowercase letters</span>
                    </label>
                    <label className="flex justify-center gap-1">
                        <input type="checkbox" className="bg-cyan-600" />
                        <span className="font-light">Uppercase letters</span>
                    </label>
                    <label className="flex justify-center gap-1">
                        <input type="checkbox" className="bg-cyan-600" />
                        <span className="font-light">Numbers</span>
                    </label>
                    <label className="flex justify-center gap-1">
                        <input type="checkbox" className="bg-cyan-600" />
                        <span className="font-light">Symbols</span>
                    </label>
                </div>
            </div>
        </main>
    )
}
