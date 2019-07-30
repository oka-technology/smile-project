type InputTextAreaProps = {
  inputtedText: string;
  onSetInputtedText: (s: string) => void;
}

type OutputTextAreaProps = {
  outputText: string;
}

type ConversionButtonProps = {
  onSetOutputText: (s: string) => void;
  inputtedText: string;
}

type TweetButtonProps = {
  tweetText: string
}
