async function loadArticles(){
  const response = await fetch("data/articles.json");
  const articles = await response.json();

  //We can do stuff here with the users

  return articles;

  //shorter version: (if we do not want to do anything special with the data)
  // return (await fetch("data/users.json")).json();

  //The same as:
  // fetch("data/users.json").then(response => {
  // });

}

document.addEventListener("DOMContentLoaded", async () => {
  let articles = []
  try {
    articles = await loadArticles();
  } catch (e) {
    console.log("error")
    console.log(e)
  }

  articles.map((article)=>{
    var theDiv = document.getElementsByClassName('articles-list')[0];

    var newNode = document.createElement('div');
    newNode.setAttribute("class", "article");
    theDiv.appendChild(newNode);

    var newNodeTitle = document.createElement('div');
    newNodeTitle.setAttribute("class", "article-title");
    newNodeTitle.innerHTML = `Article Title: ${article.title}`;
    newNode.appendChild(newNodeTitle);

    var newNodeContent = document.createElement('div');
    newNodeContent.setAttribute("class", "article-content");
    newNodeContent.innerHTML = `Article Content: ${article.content}`;
    newNode.appendChild(newNodeContent);
  })
})