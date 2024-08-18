import HomePageCss from "./HomePageCss"
const { API_KEY } = process.env

const HomePage = async ()=>{

  const api = `https://newsapi.org/v2/everything?apikey=${API_KEY}
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