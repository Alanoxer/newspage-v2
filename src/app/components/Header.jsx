"use client"
import Link from "next/link"
import Search from "./Search"
import { useSession, signOut } from "next-auth/react";



const Header = ()=>{
   const { status } = useSession();

   return(<>
  <nav id="header" className="fixed w-full z-30 top-0 text-white  bg-red-600 m-100 mb-5" >

   

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

   { 
 status === "authenticated" ?  <ul className="flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:ml-auto md:mt-0 md:pt-0 md:border-0">
  <li>
  <button>
    <Link href={"/profile"}
      className=" bg-gradient-to-r from-red-600 to-red-700 text-white
       p-2 rounded-md mr-8"
      > 
    profile
      </Link>
    </button>
  </li>
  <li>
    <button onClick={()=>{signOut();router.refresh()}}
    className="bg-gradient-to-r from-red-600 to-red-700 text-white
    p-2 rounded-md">Sign out
    </button>
  </li>
</ul>
                            : 
  <ul className="flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:ml-auto md:mt-0 md:pt-0 md:border-0">
<li>
<Link href={"/login"}
      className=" bg-gradient-to-r from-red-600 to-red-700 text-white
       p-2 rounded-md mr-4 "
      > 
    Login
      </Link>
</li>
<li>
<Link href={"/register"}
      className=" bg-gradient-to-r from-red-600 to-red-700 text-white
       p-2 rounded-md "
      > 
    Register
      </Link>
</li>
</ul>

}
</div>

<hr className="border-b border-red-500 opacity-75 my-0 py-0" />
</nav>
  </>
   ) 

}

export default Header