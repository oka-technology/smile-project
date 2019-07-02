window.addEventListener("DOMContentLoaded", () => {
  const conversionButton = document.querySelector<HTMLButtonElement>("#Conversion-button");
  const tweetButton = document.querySelector<HTMLAnchorElement>("#Tweet-button");
  const copyButton = document.querySelector<HTMLButtonElement>("#Copy-to-clipboard-button");
  const inputText = document.querySelector<HTMLTextAreaElement>("#Input-textarea");
  const outputText = document.querySelector<HTMLTextAreaElement>("#Output-textarea");
  const mainArticle = document.querySelector<HTMLElement>("#Main-article");
  
  const FOOTER_HEIGHT: number = 50;
  const BUTTON_TEXT_BEFORE_COPY: string = "‪♪(๑ᴖ◡ᴖ๑)♪コピー♪(๑ᴖ◡ᴖ๑)♪";
  const BUTTON_TEXT_AFTER_COPY: string = "‪♪(๑ᴖ◡ᴖ๑)♪コピーしたよ‪♪(๑ᴖ◡ᴖ๑)♪";

  function windowLoad() {
    mainArticle.style.height = window.innerHeight - FOOTER_HEIGHT + 'px';
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
    copyButton.textContent = BUTTON_TEXT_BEFORE_COPY;
  });

  copyButton.addEventListener("click", () => {
    outputText.select();
    document.execCommand("copy");
    copyButton.textContent = BUTTON_TEXT_AFTER_COPY;
  });
});
