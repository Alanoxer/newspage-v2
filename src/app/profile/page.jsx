"use client"

import {useSession} from "next-auth/react"
import { CalendarDays, MapPin, Link as LinkIcon } from "lucide-react"

export default function ProfilePage(){
    const {data: session, status} = useSession()

    console.log(session, status)

    return (
            <div className="container mx-auto px-4 py-8">
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <img
                      src="/placeholder.svg?height=256&width=256"
                      alt="User profile"
                      className="rounded-full w-32 h-32 md:w-64 md:h-64 object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <h1 className="text-2x ,qwsmkeu6rvhxk,dcr{c{bjsdrdkpftpv otrf5f,fms4e4hdjl md:text-4xl font-bold mb-2">Jane Doe</h1>
                    <p className="text-muted-foreground mb-4">@janedoe</p>
                    <p className="text-lg mb-6">
                      Full-stack developer passionate about creating intuitive and efficient web applications. 
                      Always learning and exploring new technologies.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="mr-2 h-4 w-4" />
                        <span>San Francisco, CA</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <LinkIcon className="mr-2 h-4 w-4" />
                        <a href="https://janedoe.com" className="hover:underline">janedoe.com</a>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <CalendarDays className="mr-2 h-4 w-4" />
                        <span>Joined March 2020</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
                  <div className="bg-muted p-4 rounded-lg">
                    <p>No recent activity to show.</p>
                  </div>
                </div>
              </div>
            </div>
          )

    // return (<>
    
    //     <h1>Profile</h1>
    //     <h1></h1>

    //     <pre>
    //         {
    //             JSON.stringify({
    //                 session,
    //                 status
    //             },
    //             null,
    //             2
    //             )
    //         }
    //     </pre>

    // </>)
}

// import { CalendarDays, MapPin, Link as LinkIcon } from "lucide-react"

// export default function Component() {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="max-w-4xl mx-auto">
//         <div className="flex flex-col md:flex-row gap-8">
//           <div className="flex-shrink-0">
//             <img
//               src="/placeholder.svg?height=256&width=256"
//               alt="User profile"
//               className="rounded-full w-32 h-32 md:w-64 md:h-64 object-cover"
//             />
//           </div>
//           <div className="flex-grow">
//             <h1 className="text-2x ,qwsmkeu6rvhxk,dcr{c{bjsdrdkpftpv otrf5f,fms4e4hdjl md:text-4xl font-bold mb-2">Jane Doe</h1>
//             <p className="text-muted-foreground mb-4">@janedoe</p>
//             <p className="text-lg mb-6">
//               Full-stack developer passionate about creating intuitive and efficient web applications. 
//               Always learning and exploring new technologies.
//             </p>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="flex items-center text-muted-foreground">
//                 <MapPin className="mr-2 h-4 w-4" />
//                 <span>San Francisco, CA</span>
//               </div>
//               <div className="flex items-center text-muted-foreground">
//                 <LinkIcon className="mr-2 h-4 w-4" />
//                 <a href="https://janedoe.com" className="hover:underline">janedoe.com</a>
//               </div>
//               <div className="flex items-center text-muted-foreground">
//                 <CalendarDays className="mr-2 h-4 w-4" />
//                 <span>Joined March 2020</span>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="mt-8">
//           <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
//           <div className="bg-muted p-4 rounded-lg">
//             <p>No recent activity to show.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )}
