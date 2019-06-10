window.onload = function(){
  const conversion_button = document.getElementById("Conversion-button");
  const tweet_button = document.getElementById("Tweet-button")

  conversion_button.onclick = function(){
    const input_text = document.getElementById("Input-textarea");
    const output_text = document.getElementById("Output-textarea");

    output_text.textContent = input_text.value.replace(/\n/g, "‪♪(๑ᴖ◡ᴖ๑)♪\n") + "‪♪(๑ᴖ◡ᴖ๑)♪";
    
    const in_href_text = encodeURI(output_text.value.replace(/\n/g, " ")).replace(/%E2%80%AA/g, ""); //ツイートできる形にする
    tweet_button.href = "https://twitter.com/intent/tweet?text=" + in_href_text;
  }
}
