import { useState } from "react"
import { FaSearch } from "react-icons/fa"
import { Link } from "react-router-dom"

export default function Header() {
  const [input, setInput] = useState()
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to="/">
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span >My</span>
            <span className='font-bold text-gray-500'>WebApp</span>
          </h1>
        </Link>
        <div>
          <form className='bg-slate-100 rounded-lg p-3 flex items-center'>
            <input className='bg-transparent border-none focus:outline-none w-24 sm:w-64' type="text" placeholder='Search...' />
            <FaSearch className="text-slate-500" />
          </form>
        </div>
        <ul className="flex gap-4">

          <Link to="/"><li className="hidden sm:inline hover:underline hover:cursor-pointer text-slate-700">Home</li></Link>
          <Link to="/about"><li className="hidden sm:inline hover:underline hover:cursor-pointer text-slate-700">About</li></Link>
          <Link to="/sign-in"><li className="sm:inline hover:underline hover:cursor-pointer text-slate-700">Sing In</li></Link>
        </ul>
      </div>
    </header >
  )
}
