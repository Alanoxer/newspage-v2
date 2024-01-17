'use client'
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"



export default function Pagination(){

    const router = useRouter()
    const params = useParams()

    const page = Number(params.pagination)
    
    console.log( page)

    const onPage = ()=>{
        
    
    }
    
    

    return (<>
        
        <div className=" bg-slate-900 flex items-center justify-center h-28">
    <div className="max-w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto bg-red-500 p-6 rounded-lg shadow-sm">

        <div className="flex justify-center">
            <nav className="flex space-x-2" aria-label="Pagination">
                <button onClick={()=>{
                    router.push(`/news/${params.keyword}/${params.pagination - 1}`)
                }} className="relative inline-flex items-center px-4 py-2 text-sm bg-gradient-to-r from-violet-500 to-indigo-700 border border-fuchsia-100 hover:border-violet-100 text-white font-semibold cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
                    Previous
                </button>
                <Link href={`/news/${params.keyword}/1`} className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-violet-500 hover:bg-violet-400 cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
                    1
                </Link>
                <Link href={`/news/${params.keyword}/2`}className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-violet-500 hover:bg-violet-400 cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
                    2
                </Link>
                <Link href={`/news/${params.keyword}/3`} className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-violet-500 hover:bg-violet-400 cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
                    3
                </Link>
                <button onClick={()=>{
                    router.push(`/news/${params.keyword}/${page + 1}`)
                }} className="relative inline-flex items-center px-4 py-2 text-sm bg-gradient-to-r from-violet-500 to-indigo-700 border border-fuchsia-100 hover:border-violet-100 text-white font-semibold cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
                    Next
                </button>
            </nav>
        </div>

    </div>
</div>

            </>
    )
}