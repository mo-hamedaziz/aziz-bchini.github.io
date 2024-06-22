import React from "react";
import Typewriter from "typewriter-effect";

const TypingEffect = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Cyber Security Enthusiast",
          "CTF Player & Author",
          "THM top 5%",
          "AWS Certified",
          "Computer Networks and Telecommunications Engineering student @INSAT",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default TypingEffect;
