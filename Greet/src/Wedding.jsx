import { useParams } from "react-router-dom";

import heroImage from "../public/image1.jpeg";
import Gallery from "./Gallery";

function WeddingGreeting() {
  const { name } = useParams();

  return (
    <div className="app-container">
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="overlay">
        <div className="content">
          <h1>Dear {name}</h1>

          <p className="quote">
            Thank you for being a part of our beautiful journey.
          </p>

          <p className="message">
            Your presence on our special day means the world to us.
          </p>
        </div>
      </div>
    </section>

    <Gallery />
  </div>
  );
}

export default WeddingGreeting;