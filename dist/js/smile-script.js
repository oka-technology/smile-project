window.onload = function(){
  const conversion_button = document.getElementById("Conversion-button");
  const tweet_button = document.getElementById("Tweet-button")
  conversion_button.onclick = function(){
    const input_text = document.getElementById("Input-textarea");
    const output_text = document.getElementById("Output-textarea");
    output_text.textContent = input_text.value.replace(/\n/g, "‪♪(๑ᴖ◡ᴖ๑)♪\n") + "‪♪(๑ᴖ◡ᴖ๑)♪";
    console.log(output_text.value);
    tweet_button.href = "https://twitter.com/intent/tweet?text=" + output_text.value.replace(/\n/g, " ");
  }
}
