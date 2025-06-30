import { ArrowsCounterClockwise, CopySimple } from "phosphor-react";
import * as Slider from '@radix-ui/react-slider';
import { useState } from "react";
import { toast } from "react-toastify";

type EventType = {
    preventDefault: () => void;
}

export function PasswordGenerator() {
    // O motivo de precisar usar colchetes, como [5] 
    // em vez de apenas 5, é porque o componente Slider do Radix 
    // UI é multivalorado por padrão — ou seja, ele espera um array 
    // de números, mesmo que tenha apenas um valor (como [5] em vez de 5).
    const [charNumber, setCharNumber] = useState([4])
    const [includeLower, setIncludeLower] = useState(false);
    const [includeUpper, setIncludeUpper] = useState(false);
    const [includeNumber, setIncludeNumber] = useState(false);
    const [includeSymbol, setIncludeSymbol] = useState(false);
    const [password, setPassword] = useState('');

    function generatePassword(event: EventType) {
        event.preventDefault()
        if (charNumber[0] < 4) {
          return toast.error('The password need to have over four char', {
            position: 'top-center',
            className: 'p-0 w-[400px] border border-purple-600/40'
          });
        }
      
        const lowers = 'abcdefghijklmnopqrstuvwxyz';
        const uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numbers = '0123456789';
        const symbols = '!@#$%^&*()_+{}[]<>?,.';
      
        let charset = '';
        let requiredChars = '';
      
        if (includeLower) {
          charset += lowers;
          requiredChars += lowers[Math.floor(Math.random() * lowers.length)];
        }
        if (includeUpper) {
          charset += uppers;
          requiredChars += uppers[Math.floor(Math.random() * uppers.length)];
        }
        if (includeNumber) {
          charset += numbers;
          requiredChars += numbers[Math.floor(Math.random() * numbers.length)];
        }
        if (includeSymbol) {
          charset += symbols;
          requiredChars += symbols[Math.floor(Math.random() * symbols.length)];
        }
      
        if (charset === '') {
            return toast.error('Select at least one option', {
                position: 'top-center',
                className: 'p-0 w-[400px] border border-purple-600/40'
              });
        }
      
        let remainingLength = charNumber[0] - requiredChars.length;
        let passwordBody = '';
      
        for (let i = 0; i < remainingLength; i++) {
          const randomIndex = Math.floor(Math.random() * charset.length);
          passwordBody += charset[randomIndex];
        }
      
        const fullPassword = shuffleString(requiredChars + passwordBody);
        setPassword(fullPassword);
      }
      
      // serve para embaralhar os caracteres da senha
      function shuffleString(str: string) {
        return str
          .split('')
          .sort(() => Math.random() - 0.5)
          .join('');
      }
      


    return (
        <main className="bg-white p-4 w-[400px] md:w-[600px] rounded-b-md">


            <div className="flex justify-center items-center gap-2 mb-2">
                <div className="w-full px-2 border-cyan-600 border-3 rounded-md flex items-center justify-between">
                    <input
                        type="text"
                        className="border-0 w-full rounded p-0.5 focus:outline-0"
                        value={password}
                        readOnly
                    />

                    <ArrowsCounterClockwise
                        size={30}
                        color="#0891b2"
                        className="cursor-pointer"
                        onClick={generatePassword}
                    />
                </div>
                <CopySimple
                    size={32}
                    color="#0891b2"
                    className="cursor-pointer"
                    onClick={() => {
                        navigator.clipboard.writeText(password)
                        alert("Password copied!");
                    }}
                />

            </div>
            <h2 className="text-cyan-800 font-semibold text-lg mt-4 mb-2">Personalize your Password</h2>
            <form onSubmit={generatePassword}>
                <p className="text-cyan-800 font-light">Char number:  {charNumber}</p>
                <div className="mb-2">
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
                        <input
                            type="checkbox"
                            checked={includeLower}
                            onChange={() => setIncludeLower(!includeLower)}
                        />
                        <span className="font-light text-slate-700">Lowercase letters</span>
                    </label>

                    <label className="flex justify-center gap-1">
                        <input
                            type="checkbox"
                            checked={includeUpper}
                            onChange={() => setIncludeUpper(!includeUpper)}
                        />
                        <span className="font-light text-slate-700">Uppercase letters</span>
                    </label>

                    <label className="flex justify-center gap-1">
                        <input
                            type="checkbox"
                            checked={includeNumber}
                            onChange={() => setIncludeNumber(!includeNumber)}
                        />
                        <span className="font-light text-slate-700">Numbers</span>
                    </label>

                    <label className="flex justify-center gap-1">
                        <input
                            type="checkbox"
                            checked={includeSymbol}
                            onChange={() => setIncludeSymbol(!includeSymbol)}
                        />
                        <span className="font-light text-slate-700">Symbols</span>
                    </label>

                </div>
                <button 
                type="submit"
                className="text-cyan-600 mt-4 p-2 rounded-lg flex justify-center items-center border-4 border-cyan-600">Generate Password</button>
            </form>
        </main>
    )
}
