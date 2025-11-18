import {NavLink} from "react-router-dom";
import Modal from "./Modal"
import {useState} from "react"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
return (
    <header className="flex justify-between px-4 py-6 shadow-md md:px-8">
    <h1 className="cursor-pointer">Site-name</h1>
      <ul className="flex justify-between gap-4">
        <li>
 <NavLink className= {({isActive}) => isActive ? 'text-blue-600 underline hover:text-red-800' : 'hover:text-red-600'} to="/">Home</NavLink>
        </li>
       <li>
 <NavLink className= {({isActive}) => isActive ? 'text-blue-600 underline hover:text-red-800' : 'hover:text-red-600'} to="/about">About</NavLink>
       </li>
       <li>
<NavLink className= {({isActive}) => isActive ? 'text-blue-600 underline hover:text-red-800' : 'hover:text-red-600'} to="/contact"  prefetch="none">Contact</NavLink>
       </li>
        <li>
          <button onClick={()=> setIsOpen(true)} className="cursor-pointer">Sign in</button>
          <Modal isOpen={isOpen} setIsOpen={setIsOpen}
          header={
            <div className="text-xl font-bold">Sign In</div>
          }
          footer={
            <div className="flex justify-end gap-4">
          <button
            onClick={() => setIsOpen(false)}
            className="cursor-pointer rounded-md bg-gray-300 px-6 py-2 font-semibold hover:bg-gray-400/80 active:bg-gray-400/60"
          >
            Cancel
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="cursor-pointer rounded-md bg-blue-300 px-6 py-2 font-semibold hover:bg-blue-400/80 active:bg-blue-400/60"
          >
            Sign In
          </button>
        </div>
          }
          children={
            <div className="-mx-4 my-3 border-y px-4 py-4 flex flex-wrap gap-4">
          <input
            placeholder="Username"
            className="grow rounded border border-gray-600 px-2 py-1"
            type="text"
          />
          <input
            placeholder="Password"
            className="grow rounded border border-gray-600 px-2 py-1"
            type="password"
          />
        </div>
          }
          />
        </li>
      </ul>
      </header>
)
}
export default Header;