window.addEventListener("DOMContentLoaded", function () {
    var conversionButton = document.querySelector("#Conversion-button");
    var tweetButton = document.querySelector("#Tweet-button");
    var copyButton = document.querySelector("#Copy-to-clipboard-button");
    var inputText = document.querySelector("#Input-textarea");
    var outputText = document.querySelector("#Output-textarea");
    var mainArticle = document.querySelector("#Main-article");
    var footerHeight = 50;
    var copyBtnTextDefault = "‪♪(๑ᴖ◡ᴖ๑)♪コピー♪(๑ᴖ◡ᴖ๑)♪";
    var copyBtnTextAfter = "‪♪(๑ᴖ◡ᴖ๑)♪コピーしたよ‪♪(๑ᴖ◡ᴖ๑)♪";
    function windowLoad() {
        mainArticle.style.height = window.innerHeight - footerHeight + 'px';
    }
    windowLoad();
    window.addEventListener("resize", function () { return windowLoad(); });
    function isOS() {
        return navigator.userAgent.match(/ipad|iphone/i);
    }
    if (isOS()) {
        copyButton.parentNode.removeChild(copyButton);
    }
    conversionButton.addEventListener("click", function () {
        outputText.textContent = inputText.value.replace(/\n/g, "‪♪(๑ᴖ◡ᴖ๑)♪\n") + "‪♪(๑ᴖ◡ᴖ๑)♪";
        var in_href_text = encodeURI(outputText.value.replace(/\n/g, " ")).replace(/%E2%80%AA/g, "");
        tweetButton.href = "https://twitter.com/intent/tweet?text=" + in_href_text;
        copyButton.textContent = copyBtnTextDefault;
    });
    copyButton.addEventListener("click", function () {
        outputText.select();
        document.execCommand("copy");
        copyButton.textContent = copyBtnTextAfter;
    });
});
//# sourceMappingURL=smile-script2.js.map