import { useState, useEffect } from 'react';

const useTypeWriter = (text, speed = 50) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let typingInterval;
    
    if (index < text.length) {
      typingInterval = setInterval(() => {
        setDisplayText(prevText => prevText + text.charAt(index));
        setIndex(prevIndex => prevIndex + 1);
      }, speed);
    }

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed, index]);

  return displayText;
};

export default useTypeWriter;
