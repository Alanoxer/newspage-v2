import Link from "next/link"



const Header = ()=>{
   return(<>
  <nav id="header" className="fixed w-full z-30 top-0 text-white  bg-red-500 m-100 mb-5" >

   

<div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">

   <div className="pl-4 flex items-center">
      <span className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
          <Link href="/">KenKaKef</Link>
      </span>
   </div>

   <div className=" static mx-auto ml-30
   
   ">
      <Search />
   </div>

   <div className="block lg:hidden pr-4">
      <button id="nav-toggle" className="flex items-center px-3 py-2 border rounded text-red-500 border-red-500 hover:text-red-700 hover:border-red-700 appearance-none focus:outline-none">
         <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
         </svg>
      </button>
   </div>

   <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden  mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
      <ul className="list-reset lg:flex justify-end flex-1 items-center">
         <li className="mr-3">
            <Link className="inline-block py-2 px-4 text-black font-bold no-underline" href="/about">About</Link>
         </li>
         <li className="mr-3">
            <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">Login</a>
         </li>
         <li className="mr-3">
            <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">Register</a>
         </li>
      </ul>
      <button id="navAction" className="mx-auto lg:mx-0 hover:underline bg-red-500 text-white font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75">Config</button>
   </div>
</div>

<hr className="border-b border-red-500 opacity-75 my-0 py-0" />
</nav>
  </>
   ) 

}

export default Header