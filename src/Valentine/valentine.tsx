import { useEffect, useState } from "react";
import Heart from "./heart/heart";
import gsap from "gsap";
import "./valentine.css";

function Valentine() {
  const [accept, setAccept] = useState<boolean>(false);

  useEffect(() => {
    textAnim();
  }, []);

  // Text animation using GSAP
  const textAnim = () => {
    const s = document.querySelectorAll(".s");
    const v = document.querySelectorAll(".v");
    if (s.length === 0 || v.length === 0) {
      console.warn("No elements found for animation");
      return;
    }

    const tl = gsap.timeline();
    tl.set(s, { opacity: 1 }) // Make sure the elements are visible
      .fromTo(
        s,
        {
          scale: 0, // Start at scale 0
          y: 40, // Start at 40px below the final position
        },
        {
          duration: 0.4,
          ease: "power1.inOut",
          scale: 1, // Scale to full size
          y: 0, // Move to original position
          stagger: 0.04, // Stagger animation
        }
      );

    tl.set(v, { opacity: 1 }) // Make sure the elements are visible
      .fromTo(
        v,
        {
          scale: 0, // Start at scale 0
          y: 40, // Start at 40px below the final position
        },
        {
          duration: 0.4,
          ease: "power1.inOut",
          scale: 1, // Scale to full size
          y: 0, // Move to original position
          stagger: 0.04, // Stagger animation
        }
      );
  };

  // Function to move the "No" button randomly when it's clicked or hovered
  const moveButton = () => {
    const noButton = document.getElementById("noButton");
    if (noButton) {
      // Get viewport width and height
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // Random x and y values for the position
      const x = Math.random() * (viewportWidth - noButton.offsetWidth);
      const y = Math.random() * (viewportHeight - noButton.offsetHeight);

      // Apply the random position with smooth transition
      noButton.style.transition = "transform 0.5s ease-in-out"; // Smooth transition for movement
      noButton.style.transform = `translate(${x}px, ${y}px)`; // Move the button to a random position
    }
  };

  return (
    <div className="valentine-container">
      {accept ? (
        <Heart />
      ) : (
        <div className="invite-container">
          <div className="greetings-container">
            <div className="greeting">
              <div>
                <span className="s">W</span>
                <span className="s">i</span>
                <span className="s">l</span>
                <span className="s">l</span>
                <span className="s space"> </span>
                <span className="s">y</span>
                <span className="s">o</span>
                <span className="s">u</span>
                <span className="s space"> </span>
                <span className="s">b</span>
                <span className="s">e</span>
                <span className="s space"> </span>
                <span className="s">m</span>
                <span className="s">y</span>
              </div>
            </div>
            <div className="greeting-valentine">
              <div>
                <span className="v">v</span>
                <span className="v">a</span>
                <span className="v">l</span>
                <span className="v">e</span>
                <span className="v">n</span>
                <span className="v">t</span>
                <span className="v">i</span>
                <span className="v">n</span>
                <span className="v">e</span>
                <span className="v">?</span>
              </div>
            </div>
          </div>

          <div className="gif_container">
            <img
              src="https://i.postimg.cc/pdNqPxx1/milk-and-mocha-cute.gif"
              alt="Cute animated illustration"
            />
          </div>

          <div className="buttons-container">
            <button
              className="btn yes-button"
              id="yesButton"
              onClick={() => setAccept(true)}
            >
              Yes
            </button>
            <button
              className="btn no-button"
              id="noButton"
              onMouseOver={moveButton}
              onClick={moveButton}
            >
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Valentine;
