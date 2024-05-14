import HomePage from "./components/HomePage";
import DashBoard from "./components/DashBoard";
import ListOfNews from "./components/ListOfNews"


export default function Home({params}) {
  const {keyword, pagination} = params

  return (
    <div className="flex ">
      <div>

        <div className="bg-gray-300"><DashBoard/></div>
        
        <HomePage/>

        <div className=" bg-slate-900 py-10 grid grid-cols-12 sm:px-5 gap-x-8 gap-y-5 border-y-2 border-gray-400">
            <ListOfNews keyword={keyword} pagination={pagination}/>
        </div>
      </div>
    </div>
  );
}
