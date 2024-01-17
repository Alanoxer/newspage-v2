import HomePageCss from "./HomePageCss"

const HomePage = async ()=>{
    const apiKey = '2e4d34f6e8054376a1a94c3a459c3a6f'


  const api = `https://newsapi.org/v2/everything?apikey=${apiKey}
  &q=Rusia
  &pageSize=1
  &sortBy=popularity 
 `

  return await fetch(api, { cache : 'no-store' })
  .then(res =>  res.json())
     .then(response =>{
          const {articles = []} = response
        if(Array.isArray(articles)){
          const niu = articles[0] 
          console.log(niu)

          const newDestacada = <HomePageCss
              key={niu?.url}
              title={niu?.title}
              published_at={niu?.publishedAt}
              author={niu?.author}
              url={niu?.url}
              image={niu?.urlToImage}
            />

            return newDestacada
          
        }
        })
     

}

export default HomePage