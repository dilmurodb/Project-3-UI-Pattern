const url = "https://newsapi.org/v2/everything?q=apple&from=2019-12-01&to=2019-12-01&sortBy=popularity&apiKey=API_KEY";
fetch(url, {
    headers: {
        "news-api-key": "7d3ee15c957a409e9307d7099b89f646"
    }
})
.then(res => res.json())
.then(res => {
    console.log(res);
});