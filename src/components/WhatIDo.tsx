import { KeyboardEvent, useEffect, useState } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const updateInteractionMode = () => {
      const isTouch =
        ScrollTrigger.isTouch > 0 ||
        window.matchMedia("(hover: none), (pointer: coarse)").matches;

      setIsTouchDevice(isTouch);
      setActiveIndex(isTouch ? 0 : null);
    };

    updateInteractionMode();
    window.addEventListener("resize", updateInteractionMode);

    return () => {
      window.removeEventListener("resize", updateInteractionMode);
    };
  }, []);

  const toggleCard = (index: number) => {
    if (!isTouchDevice) return;
    setActiveIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>, index: number) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleCard(index);
    }
  };
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className={`what-content ${!isTouchDevice ? "what-noTouch" : ""} ${
              activeIndex === 0 ? "what-content-active" : ""
            } ${activeIndex !== null && activeIndex !== 0 ? "what-sibling" : ""}`}
            onClick={() => toggleCard(0)}
            onKeyDown={(event) => handleKeyDown(event, 0)}
            role={isTouchDevice ? "button" : undefined}
            tabIndex={isTouchDevice ? 0 : undefined}
            aria-expanded={isTouchDevice ? activeIndex === 0 : undefined}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>FRONTEND</h3>
              <h4>Building Interactive UIs</h4>
              <p>
                Crafting performant, responsive interfaces with modern frameworks.
                From SPAs to micro-frontends, I deliver pixel-perfect experiences.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">React.js</div>
                
                <div className="what-tags">Next.js</div>
                <div className="what-tags">TypeScript</div>
                <div className="what-tags">JavaScript</div>
                <div className="what-tags">Material UI</div>
                <div className="what-tags">HTML5</div>
                <div className="what-tags">CSS3</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className={`what-content ${!isTouchDevice ? "what-noTouch" : ""} ${
              activeIndex === 1 ? "what-content-active" : ""
            } ${activeIndex !== null && activeIndex !== 1 ? "what-sibling" : ""}`}
            onClick={() => toggleCard(1)}
            onKeyDown={(event) => handleKeyDown(event, 1)}
            role={isTouchDevice ? "button" : undefined}
            tabIndex={isTouchDevice ? 0 : undefined}
            aria-expanded={isTouchDevice ? activeIndex === 1 : undefined}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>BACKEND</h3>
              <h4>Scalable Server Architecture</h4>
              <p>
                Designing robust APIs and microservices. From CMS platforms to
                complex business logic, I build backends that scale.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Java</div>
                <div className="what-tags">Spring Boot</div>
                <div className="what-tags">Spring MVC</div>
                <div className="what-tags">SQL</div>
                <div className="what-tags">MySQL</div>
                <div className="what-tags">MongoDB</div>
                <div className="what-tags">REST APIs</div>
                <div className="what-tags">OOP</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
