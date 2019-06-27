window.addEventListener("DOMContentLoaded", () => {
  const conversionButton = document.querySelector("#Conversion-button");
  const tweetButton = document.querySelector("#Tweet-button");
  const copyButton = document.querySelector("#Copy-to-clipboard-button");
  const inputText = document.querySelector("#Input-textarea");
  const outputText = document.querySelector("#Output-textarea");
  const mainArticle = document.querySelector("#Main-article");
  const footerHeight = 50;

  function windowLoad() {
    mainArticle.style.height = window.innerHeight - footerHeight + 'px';
  }

  windowLoad();
  window.addEventListener("resize", () => windowLoad());

  function isOS() {
    return navigator.userAgent.match(/ipad|iphone/i);
  }
  if (isOS()) {
    copyButton.parentNode.removeChild(copyButton);
  }

  conversionButton.addEventListener("click", () => {
    outputText.textContent = inputText.value.replace(/\n/g, "‪♪(๑ᴖ◡ᴖ๑)♪\n") + "‪♪(๑ᴖ◡ᴖ๑)♪";

    const in_href_text = encodeURI(outputText.value.replace(/\n/g, " ")).replace(/%E2%80%AA/g, ""); //ツイートできる形にする
    tweetButton.href = "https://twitter.com/intent/tweet?text=" + in_href_text;
    copyButton.textContent = "‪♪(๑ᴖ◡ᴖ๑)♪コピー♪(๑ᴖ◡ᴖ๑)♪";
  });

  copyButton.addEventListener("click", () => {
    outputText.select();
    document.execCommand("copy");
    copyButton.textContent = "‪♪(๑ᴖ◡ᴖ๑)♪コピーしたよ‪♪(๑ᴖ◡ᴖ๑)♪";
  });
});
