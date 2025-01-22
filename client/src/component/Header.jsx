import { Link } from 'react-router-dom'

import {FaSearch} from 'react-icons/fa'

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
      <a href="/">
      <h1 className="font-bold text-sm sm:text-2xl flex-wrap">
        <span className="font-bold text-2xl">Excel</span>
        <span className="font-bold text-2xl">Real Estate</span>

      </h1>
      </a>
      <form className="bg-slate-100 p-3 rounded-lg flex items-center">
        <input type="text" placeholder="search..." 
        className="bg-transparent focus outline-none w-24 sm:w-64 md:w-96"/>
        <FaSearch className="text-slate-500"/>
      </form>
          <ul className='flex gap-4'>
              <Link to='/'>
              <li className='hidden sm:inline text-700 hover:underline'>
                Home
                </li>
              </Link>
              <Link to='/about'>
              <li className='hidden sm:inline text-700 hover:underline'>
                About
                </li>
              </Link>
              <Link to='/sign-in'>
              <button>Sign in</button>
              </Link>
          </ul>
      </div>
    </header>
  )
}




//   import { Link } from 'react-router-dom'

//  export default function Header() {
//    return (
//  <div className='bg-slate-200'>
//           <div className="flex justify-between items-center 
//           max-w-6xl mx-auto p-3">
//               <Link to='/'>
//              <h1 className='font-bold'>Auth App</h1>
//               </Link>
//                <ul className='flex gap-4'>
//                  <Link to='/'>
//                  <li>Home</li>
//                 </Link>
//                  <Link to='/about'>
//                  <li>About</li>
//                  </Link>
//                  <Link to='/sign-in'>
//                 <li>Sign</li>
//                  </Link>
//               </ul> 
//           </div>
//       </div>
//   )
// } 
