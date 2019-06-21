window.addEventListener("DOMContentLoaded", function () {
  const conversionButton = document.getElementById("Conversion-button");
  const tweetButton = document.getElementById("Tweet-button");
  const copyButton = document.getElementById("Copy-to-clipboard-button");
  const inputText = document.getElementById("Input-textarea");
  const outputText = document.getElementById("Output-textarea");
  const mainArticle = document.getElementsByClassName("main-article");
  const footerHeight = 50;
  let target = null;

  function windowLoad() {
    mainArticle[0].style.height = window.innerHeight - footerHeight + 'px';
  }
  windowLoad();
  window.onresize = windowLoad;

  function isOS() {
    return navigator.userAgent.match(/ipad|iphone/i);
  }
  if (isOS()) {
    copyButton.parentNode.removeChild(copyButton);
  }

  conversionButton.onclick = function () {
    outputText.textContent = inputText.value.replace(/\n/g, "‪♪(๑ᴖ◡ᴖ๑)♪\n") + "‪♪(๑ᴖ◡ᴖ๑)♪";

    const in_href_text = encodeURI(outputText.value.replace(/\n/g, " ")).replace(/%E2%80%AA/g, ""); //ツイートできる形にする
    tweetButton.href = "https://twitter.com/intent/tweet?text=" + in_href_text;
    copyButton.textContent = "‪♪(๑ᴖ◡ᴖ๑)♪コピー♪(๑ᴖ◡ᴖ๑)♪";
  }

  copyButton.onclick = function () {
    outputText.select();
    document.execCommand("copy");
    copyButton.textContent = "‪♪(๑ᴖ◡ᴖ๑)♪コピーしたよ‪♪(๑ᴖ◡ᴖ๑)♪";
  }
});
