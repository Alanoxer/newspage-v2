import ListOfNewsCss from "./ListOfNewsCss"


const apiKey = '2e4d34f6e8054376a1a94c3a459c3a6f'

const ListOfNews = async ({keyword})=>{

  const api = `http://newsapi.org/v2/everything?apikey=${apiKey}
  &q=${keyword}
  &pageSize=6
 
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