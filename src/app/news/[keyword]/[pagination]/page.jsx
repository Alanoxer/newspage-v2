import ListOfNews from "../../../components/ListOfNews"


export default function New({params}){
    const {keyword, pagination} = params

    return (
    <>

        <div className="grid grid-cols-12 sm:px-5 gap-x-8 gap-y-16 mt-24">
            <ListOfNews keyword={keyword} pagination={pagination} />
        </div>

    </>  

    )
}