import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import { useState } from "react";
import About from "./pages/about";
import Blog from "./pages/blog";
import Landing from "./pages/landing";
import Login from "./pages/login";
import { createPortal } from "react-dom";

function App() {
  const activelink =
    "bg-sky-700 dark:bg-sky text-white px-3 py-2 rounded-2xl transition duration-300 ease-out font-bold";
  const navlink =
    " relative px-3 py-2 rounded-2xl font-medium after:w-0 after:h-0.5 after:bg-blue-500 after:absolute after:bottom-0 after:left-0 hover:after:w-full hover:after:transition-all hover:after:duration-300 hover:after:ease-out";
  const loginRoot = document.querySelector(".login-root") as HTMLElement;

  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <>
      <BrowserRouter>
        <nav className='flex content-center justify-between w-full px-4 py-4'>
          <h3 className='text-3xl font-bold tracking-tighter'>NF</h3>
          <div className='flex content-center h-full gap-8 '>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? activelink : navlink)}
            >
              HOME
            </NavLink>
            <NavLink
              to='/blog'
              className={({ isActive }) => (isActive ? activelink : navlink)}
            >
              BLOG
            </NavLink>
            <NavLink
              to='/about'
              className={({ isActive }) => (isActive ? activelink : navlink)}
            >
              ABOUT
            </NavLink>
          </div>
          <button
            className={`cursor-pointer ${navlink}`}
            onClick={() => setShowModal(true)}
          >
            LOGIN / SIGNUP
          </button>
          {showModal &&
            createPortal(
              <Login onClose={() => setShowModal(false)} />,
              loginRoot
            )}
        </nav>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
