import axios from "axios";

function ApiSearch(setTopNews) {
  const ApiKey: string = "pub_15897e0dbb0aa831ffac7d0eb7351c857aabe";
  const url:string = `https://newsdata.io/api/1/news?apikey=${ApiKey}&country=us&category=top&language=en`;
  axios
    .get(url)
    .then((res) => {
      const item = {
        res: res.data,
        

      }
      setTopNews(item);
    })
    .catch((err) => {
      console.log(err);
    });
}
export default ApiSearch;