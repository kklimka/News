import axios from "axios";

function ApiSearch(userInput, setSearchNews) {
  const todayData = new Date();
  const date = `${todayData.getFullYear()}-${
    todayData.getMonth() + 1
  }-${todayData.getDate()}`;
  const ApiKey: string = "6cec1399bb1646b8be177e2511a6b639";
  const url: string = `https://newsapi.org/v2/everything?q=${userInput}&from=${date}&sortBy=popularity&apiKey=${ApiKey}`;
  axios
    .get(url)
    .then((res) => {
      setSearchNews(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}
export default ApiSearch;
