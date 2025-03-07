import React, {useEffect, useState} from "react";
import { BsFillCaretDownFill } from 'react-icons/bs';
import "./home.css";

const Home = () => {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (index === "Bet faster, smarter.".length) {
          clearInterval(interval);
        }
        const wordToDisplay = "Bet faster, smarter.".slice(0, index + 1);
        const words = wordToDisplay.split(' ');
        const lastWord = words[words.length - 1];
        setText(
          words
            .map((word, i) => (
              <span
                key={i}
                style={word === lastWord ? { color: 'var(--color-variant)' } : {}}
              >
                {word}
                {i !== words.length - 1 && ' '}
              </span>
            ))
        );
        setIndex(index + 1);
      }, 70);
      return () => clearInterval(interval);
    }, [index]);
    
    return (
        <div className="homepage_container">
            <div className="home-text_container">
                <div className="home_text">
                    <h1>{text}</h1>
                    {/* <h1 id="colored_text">smarter.</h1> */}
                </div>
                <div className="home_button">
                    <a className="discord_btn" href="https://discord.gg/qxHEtGrT4A" >
                        JOIN OUR DISCORD
                    </a>
                </div>
            </div>
            <div className="down-btn_container">
                <a href="#info" className="down-btn">
                    <BsFillCaretDownFill />
                </a>
            </div>
        </div>
    )
}

export default Home;
