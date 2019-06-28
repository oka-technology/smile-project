window.addEventListener("DOMContentLoaded", () => {
  const conversionButton = document.querySelector<HTMLButtonElement>("#Conversion-button");
  const tweetButton = document.querySelector<HTMLAnchorElement>("#Tweet-button");
  const copyButton = document.querySelector<HTMLButtonElement>("#Copy-to-clipboard-button");
  const inputText = document.querySelector<HTMLTextAreaElement>("#Input-textarea");
  const outputText = document.querySelector<HTMLTextAreaElement>("#Output-textarea");
  const mainArticle = document.querySelector<HTMLElement>("#Main-article");
  const footerHeight: number = 50;
  const copyBtnTextDefault: string = "‪♪(๑ᴖ◡ᴖ๑)♪コピー♪(๑ᴖ◡ᴖ๑)♪";
  const copyBtnTextAfter: string = "‪♪(๑ᴖ◡ᴖ๑)♪コピーしたよ‪♪(๑ᴖ◡ᴖ๑)♪";

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

    const in_href_text = encodeURI(outputText.value.replace(/\n/g, " ")).replace(/%E2%80%AA/g, "");
    tweetButton.href = "https://twitter.com/intent/tweet?text=" + in_href_text;
    copyButton.textContent = copyBtnTextDefault;
  });

  copyButton.addEventListener("click", () => {
    outputText.select();
    document.execCommand("copy");
    copyButton.textContent = copyBtnTextAfter;
  });
});
