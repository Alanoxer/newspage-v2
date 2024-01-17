import ListOfNewsCss from "./ListOfNewsCss"

const { API_KEY } = process.env




const ListOfNews = async ({keyword, pagination})=>{

  const api = `http://newsapi.org/v2/everything?apikey=${API_KEY}
  &q=${keyword}
  &pageSize=6
  &page=${pagination}
 
 `

  return await fetch(api, { cache : 'no-store' })
  .then(res =>  res.json())
     .then(response =>{
          const {articles = []} = response
        if(Array.isArray(articles)){
          const news = articles
            return (
                <>
                  {news &&
                    news.map((article) => (<>
                      <ListOfNewsCss
                        key={article?.url}
                        title={article?.title}
                        description={article?.description}
                        url={article?.url}
                        urlToImage={article?.urlToImage}
                        publishedAt={article?.publishedAt}
                        author={article?.author}
                        source={article?.source.name}
                      />
                      {/* <LikeButton id={url}/> */}
                      </>
                    ))}
                </>
              )
          


        }
        })
     

}

export default ListOfNews