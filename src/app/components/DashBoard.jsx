"use client"
import Link from "next/link"
import { useParams } from "next/navigation"
import { usePathname } from 'next/navigation'

const DashBoard = ()=>{
const params = useParams()
const pathName = usePathname()


    if( pathName === "/") return (<>
    <aside className="flex w-32 flex-col space-y-2 border-r-2 border-b-20 border-red-500 bg-slate-200 p-2" style={{height: 60}}
            x-show="asideOpen">
            <Link href="/news/Deportes/1" className="flex items-center space-x-1 rounded-md px-2 py-2 mt-32 hover:bg-gray-100 hover:text-red-600">
                <span className="text-2xl"><i className="bx bx-home"></i></span>
                <span>Deportes</span>
            </Link>

            <Link href="/news/Finanzas/1" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-red-600">
                <span className="text-2xl"><i className="bx bx-cart"></i></span>
                <span>Finanzas</span>
            </Link>

            <Link href="/news/Política/1" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-red-600">
                <span className="text-2xl"><i className="bx bx-shopping-bag"></i></span>
                <span>Política</span>
            </Link>

            <Link href="/news/Culturales/1" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-red-600">
                <span className="text-2xl"><i className="bx bx-heart"></i></span>
                <span>Culturales</span>
            </Link>

            <Link href="/news/Sociales/1" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-red-600">
                <span className="text-2xl"><i className="bx bx-user"></i></span>
                <span>Sociales</span>
            </Link>

            <Link href="/news/Farándula/1" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-red-600">
                <span className="text-2xl"><i className="bx bx-user"></i></span>
                <span>Farándula</span>
            </Link>

            <Link href="/news/Policiales/1" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-red-600">
                <span className="text-2xl"><i className="bx bx-user"></i></span>
                <span>Policiales</span>
            </Link>

            <Link href="/news/Científicas/1" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-red-600">
                <span className="text-2xl"><i className="bx bx-user"></i></span>
                <span>Científicas</span>
            </Link>
        </aside>
    </>)

    else return null
}

export default DashBoard