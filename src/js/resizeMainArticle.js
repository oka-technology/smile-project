const mainArticle = document.querySelector("#Main-article");
const footerHeight = 50;

function windowLoad() {
  mainArticle.style.height = window.innerHeight - footerHeight + 'px';
}

windowLoad();
window.addEventListener("resize", () => windowLoad());
