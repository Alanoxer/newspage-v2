import Link from "next/link"

const Footer = () =>{
    return (<><footer className="bg-red-500">
    <div className="container mx-auto  px-8 ">

        <div className="w-full flex flex-col md:flex-row py-6">

            <div className="flex-1 mb-6 text-black">

                <Link className="text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="/">
                    <span>
                        KenKaKef
                    </span>
                </Link>
            </div>


            <div className="flex-1">
                <p className="uppercase text-slate-800 md:mb-6">Links</p>
                <ul className="list-reset mb-6">
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                        <Link href="#" className="no-underline hover:underline text-gray-800 hover:text-white">FAQ</Link>
                    </li>
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                        <Link href="#" className="no-underline hover:underline text-gray-800 hover:text-white">Help</Link>
                    </li>
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                        <Link href="#" className="no-underline hover:underline text-gray-800 hover:text-white">Support</Link>
                    </li>
                </ul>
            </div>
            <div className="flex-1">
                <p className="uppercase text-slate-800 md:mb-6">Legal</p>
                <ul className="list-reset mb-6">
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                        <Link href="#" className="no-underline hover:underline text-gray-800 hover:text-white">Terms</Link>
                    </li>
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                        <Link href="#" className="no-underline hover:underline text-gray-800 hover:text-white">Privacy</Link>
                    </li>
                </ul>
            </div>
            <div className="flex-1">
                <p className="uppercase text-slate-800 md:mb-6">Social</p>
                <ul className="list-reset mb-6">
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                        <Link href="#" className="no-underline hover:underline text-gray-800 hover:text-white">Facebook</Link>
                    </li>
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                        <Link href="https://www.linkedin.com/in/alan-compay-30412a280/" className="no-underline  text-gray-800 hover:text-white">Linkedin</Link>
                    </li>
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                        <Link href="#" className="no-underline hover:underline text-gray-800 hover:text-white">Twitter</Link>
                    </li>
                </ul>
            </div>
            <div className="flex-1">
                <p className="uppercase text-slate-800 md:mb-6">Company</p>
                <ul className="list-reset mb-6">
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                        <Link href="#" className="no-underline hover:underline text-gray-800 hover:text-white">Official Blog</Link>
                    </li>
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                        <Link href="#" className="no-underline hover:underline text-gray-800 hover:text-white">About Us</Link>
                    </li>
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                        <Link href="#" className="no-underline hover:underline text-gray-800 hover:text-white">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>


</footer>
    </>
    )
}

export default Footer