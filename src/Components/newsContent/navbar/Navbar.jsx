import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar w-72 min-height-screen flex flex-col gap-y-8">
    <div className="user w-full h-[20%] bg-zinc-900 rounded-xl">User</div>
    <nav className="Categories flex flex-grow bg-zinc-900 rounded-xl">Categories</nav>
  </div>
  )
}

export default Navbar 