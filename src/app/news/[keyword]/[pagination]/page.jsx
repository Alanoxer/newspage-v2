import ListOfNews from "../../../components/ListOfNews"
import DashBoard from "@/src/app/components/DashBoard"


export default function New({params}){
    const {keyword, pagination} = params

    return (
      <div className="flex ">
        <div>
  
          <div className="bg-gray-300"><DashBoard/></div>
  
          <div className=" bg-slate-900 pb-10 pt-20 grid grid-cols-12 sm:px-5 gap-x-8 gap-y-5 border-y-2 border-gray-400">
              <ListOfNews keyword={keyword} pagination={pagination}/>
          </div>
        </div>
      </div>
    );
}