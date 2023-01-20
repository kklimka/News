import axios from "axios";

function ApiSearch(setTopNews) {
  const ApiKey: string = "6cec1399bb1646b8be177e2511a6b639";
  const url:string = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${ApiKey}`;

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