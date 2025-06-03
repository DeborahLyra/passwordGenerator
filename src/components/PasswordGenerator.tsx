import { CopySimple } from "phosphor-react";




export function PasswordGenerator() {
    return (
        <main className="bg-white p-4 w-[600px] rounded-b-md">
            
            <h2 className="text-cyan-800 font-semibold text-lg mb-4">Personalize your Password</h2>
            <div className="flex justify-center items-center gap-2 mb-2">
                <input type="text" className="border-cyan-600 border-3 w-full rounded p-0.5" />
                <CopySimple size={30} />
            </div>
            <div>
                <p>Char number</p>
                <div className="flex flex-col justify-center items-start">
                    <p>What do you want to add in your password?</p>
                    <label className="flex justify-center gap-1">
                        <input type="checkbox" className="bg-cyan-600" />
                        Lowercase letters
                    </label>
                    <label className="flex justify-center gap-1">
                        <input type="checkbox" className="bg-cyan-600" />
                        Uppercase letters
                    </label>
                    <label className="flex justify-center gap-1">
                        <input type="checkbox" className="bg-cyan-600" />
                        Numbers
                    </label>
                    <label className="flex justify-center gap-1">
                        <input type="checkbox" className="bg-cyan-600" />
                        Symbols
                    </label>
                </div>
            </div>
        </main>
    )
}
