window.onload = function(){
  const conversion_button = document.getElementById("Conversion-button");
  const tweet_button = document.getElementById("Tweet-button");
  const copy_button = document.getElementById("Copy-to-clipboard-button");
  const input_text = document.getElementById("Input-textarea");
  const output_text = document.getElementById("Output-textarea");
  const footer = document.getElementsByClassName("footer");
  const main_article = document.getElementsByClassName("main-article");
  let target = null;

  console.log(window.innerHeight);
  main_article[0].style.height = window.innerHeight - footer[0].clientHeight + 'px';
  
  function isOS() {
    return navigator.userAgent.match(/ipad|iphone/i);
  }

  if (isOS()) {
    copy_button.parentNode.removeChild(copy_button);
  }

  conversion_button.onclick = function(){
    output_text.textContent = input_text.value.replace(/\n/g, "‪♪(๑ᴖ◡ᴖ๑)♪\n") + "‪♪(๑ᴖ◡ᴖ๑)♪";

    const in_href_text = encodeURI(output_text.value.replace(/\n/g, " ")).replace(/%E2%80%AA/g, ""); //ツイートできる形にする
    tweet_button.href = "https://twitter.com/intent/tweet?text=" + in_href_text;
    copy_button.textContent = "‪♪(๑ᴖ◡ᴖ๑)♪コピー♪(๑ᴖ◡ᴖ๑)♪";
  }

  copy_button.onclick = function(){
    output_text.select();
    document.execCommand("copy");
    copy_button.textContent = "‪♪(๑ᴖ◡ᴖ๑)♪コピーしたよ‪♪(๑ᴖ◡ᴖ๑)♪";
  }
}
