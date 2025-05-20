import {useState} from 'react'
import './App.css'

function App() {
    const [inputValue, setInputValue] = useState<number>(0)
    const [count, setCount] = useState<number>(0)
    const buttonStyle: string = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white gap-10">
                <p className="text-5xl font-bold underline">Hello React!</p>
                <p className="text-3xl font-bold text-gray-500">This site is currently under construction</p>
                <p className="text-2xl font-bold text-red-500">Current variable value: {count}</p>
                <input className="border-2 border-gray-300 bg-gray-800 rounded-lg p-2 text-white"
                       type="number" value={inputValue}
                       onChange={
                           (event) =>
                               setInputValue(() => Number.parseInt(event.target.value))
                       }
                />
                <input type="button" className={buttonStyle} value="Add me!"
                       onClick={
                           () => setCount((count) => count + inputValue)
                       }
                />
                <input type="button" className={buttonStyle} value="Subtract me!"
                       onClick={
                           () => setCount((count) => count - inputValue)
                       }
                />
            </div>
        </>
    )
}

export default App
