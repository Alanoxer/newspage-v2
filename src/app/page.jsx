import HomePage from "./components/HomePage";
import ListOfNews from "./components/ListOfNews"


export default function Home({params}) {
  const {keyword, pagination} = params

  return (
       <>
        <HomePage/>

        <div className=" my-10 grid grid-cols-12 sm:px-5 gap-x-8 gap-y-5">
            <ListOfNews keyword={keyword} pagination={pagination}/>
        </div>
      </>
  );
}
