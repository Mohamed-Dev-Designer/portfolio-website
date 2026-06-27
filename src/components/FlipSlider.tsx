import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import "./FlipSlider.css";

gsap.registerPlugin(Flip);

export function FlipSlider() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = containerRef.current;
    if (!slider) return;

    const moveCard = () => {
      const lastItem = slider.querySelector(".item:last-child") as HTMLImageElement;
      if (slider && lastItem) {
        lastItem.style.display = "none";
        const newItem = document.createElement("img");
        newItem.className = lastItem.className;
        newItem.src = lastItem.src;
        slider.insertBefore(newItem, slider.firstChild);
      }
    };

    const handleClick = () => {
      let state = Flip.getState(slider.querySelectorAll(".item"));

      moveCard();

      Flip.from(state, {
        targets: slider.querySelectorAll(".item"),
        ease: "sine.inOut",
        absolute: true,
        onEnter: (elements) => {
          return gsap.from(elements, {
            duration: 0.3,
            yPercent: 20,
            opacity: 0,
            ease: "expo.out"
          });
        },
        onLeave: (elements) => {
          return gsap.to(elements, {
            duration: 0.3,
            yPercent: 5,
            xPercent: -5,
            transformOrigin: "bottom left",
            opacity: 0,
            ease: "expo.out",
            onComplete: () => {
              elements.forEach(el => {
                if (el.parentNode === slider) {
                  slider.removeChild(el);
                }
              });
            }
          });
        }
      });
    };

    const section = slider.parentElement;
    if (section) {
      section.addEventListener("click", handleClick);
      return () => section.removeEventListener("click", handleClick);
    }
  }, []);

  return (
    <section className="flip-slider-section">
      <div className="slider" ref={containerRef}>
        <img className="item item-5" src="https://assets.codepen.io/16327/portrait-number-5.png" alt="" />
        <img className="item item-4" src="https://assets.codepen.io/16327/portrait-number-4.png" alt="" />
        <img className="item item-3" src="https://assets.codepen.io/16327/portrait-number-3.png" alt="" />
        <img className="item item-2" src="https://assets.codepen.io/16327/portrait-number-2.png" alt="" />
        <img className="item item-1" src="https://assets.codepen.io/16327/portrait-number-1.png" alt="" />
      </div>
    </section>
  );
}
<img className="item item-1" src="https://assets.codepen.io/16327/portrait-number-1.png" alt="" />
      </div >
    </section >
  );
}
