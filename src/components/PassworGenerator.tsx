import { CopySimple } from "phosphor-react";


export function PassworGenerator() {
    return (
        <main className="border-cyan-600 border-3 p-2 w-[600px]">
            <h2 className="text-cyan-800 font-semibold text-lg">Personalize your Password</h2>
            <div className="flex justify-center items-center gap-2">
                <input type="text" className="border-cyan-600 border-3 w-[90%]" />
                <CopySimple size={30} />
            </div>
            <div>
                <p>Char number</p>
                <div className="flex flex-col justify-center items-start">
                    <p>What do you want to add in you password?</p>
                    <label className="flex justify-center gap-1">
                        <input
                            type="checkbox"
                            className="bg-cyan-600"
                        />
                        Lowercase letters
                    </label>
                    <label className="flex justify-center gap-1">
                        <input
                            type="checkbox"
                            className="bg-cyan-600"
                        />
                        Lowercase letters
                    </label>
                    <label className="flex justify-center gap-1">
                        <input
                            type="checkbox"
                            className="bg-cyan-600"
                        />
                        Lowercase letters
                    </label>
                    <label className="flex justify-center gap-1">
                        <input
                            type="checkbox"
                            className="bg-cyan-600"
                        />
                        Lowercase letters
                    </label>
                </div>
            </div>
        </main>
    )
}
