import * as React from 'react';
import { useRef , useEffect} from 'react';
import * as styles from './OutputTextArea.scss';

function OutputTextarea(props: OutputTextAreaProps) {
  const refOftextarea = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    props.onsetRefOfOutputTextarea(refOftextarea);
  }, []);
  return (
    <textarea
    className={styles.normal}
    placeholder="ここに出力されるよ‪♪(๑ᴖ◡ᴖ๑)♪"
    value={props.outputText}
    ref={refOftextarea}
    contentEditable={true}
    readOnly={true}
    ></textarea>
  )
}

export default OutputTextarea;
