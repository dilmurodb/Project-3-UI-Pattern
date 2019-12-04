const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=7d3ee15c957a409e9307d7099b89f646";
fetch(url, {
    header: {
        "X-Api-Key": "7d3ee15c957a409e9307d7099b89f646"
    }
})
.then(res => res.json())
.then(res => {
    console.log(res);
    console.log(res.articles[1].urlToImage)
});


