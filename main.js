const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=7d3ee15c957a409e9307d7099b89f646";
fetch(url, {
    header: {
        "X-Api-Key": "7d3ee15c957a409e9307d7099b89f646"
    }
})
.then(res => res.json())
.then(res => {
    // console.log(res);
    // console.log(res.articles[4].urlToImage)
    let boxes = document.querySelectorAll(".newsbox")
    document.getElementById("img1").src = res.articles[0].urlToImage
    document.getElementById("img2").src = res.articles[1].urlToImage
    document.getElementById("img3").src = res.articles[2].urlToImage
    document.getElementById("img4").src = res.articles[3].urlToImage
    document.getElementById("img5").src = res.articles[4].urlToImage
    document.getElementById("img6").src = res.articles[5].urlToImage
    document.getElementById("img7").src = res.articles[6].urlToImage
    document.getElementById("img8").src = res.articles[7].urlToImage
    document.getElementById("img9").src = res.articles[8].urlToImage
    document.getElementById("img10").src = res.articles[9].urlToImage
    document.getElementById("img11").src = res.articles[16].urlToImage
    document.getElementById("img12").src = res.articles[11].urlToImage
    document.getElementById("img13").src = res.articles[12].urlToImage
    document.getElementById("img14").src = res.articles[13].urlToImage
    document.getElementById("img15").src = res.articles[14].urlToImage

});


