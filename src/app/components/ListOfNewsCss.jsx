import Link from "next/link"



const ListOfNewsCss = ({urlToImage, url, title, publishedAt, author, description, source})=>{
    return (
        
      <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4
      mb-20 ">
        <img
            src={urlToImage}/>
        <p className="bg-red-500 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
            rounded-full uppercase ">{source}</p>
        <Link href={url} className="text-lg font-bold sm:text-xl md:text-2xl hover:to-blue-700 ">{title}</Link>
        <p className="text-sm text-white">{description}</p>
        <div className="pt-2 pr-0 pb-0 pl-0">
          <p className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">author: {author}</p>
          <p className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">· {publishedAt} ·</p>
          
        </div>
      </div>
      )}
    
    


export default ListOfNewsCss