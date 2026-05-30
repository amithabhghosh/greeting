import { useParams } from "react-router-dom";

import heroImage from "../public/image1.jpeg";
import Gallery from "./Gallery";
import { useEffect, useState } from "react";
import gallery1 from "../public/image1.jpeg";
import gallery2 from "../public/image2.jpeg";
import gallery3 from "../public/image3.jpeg";
import gallery4 from "../public/image4.jpeg";
function WeddingGreeting() {
  const { name } = useParams();


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const images = [
      heroImage,
    gallery1,
      gallery2,
      gallery3,
      gallery4,
    ];

    let loadedCount = 0;

    images.forEach((src) => {
      const img = new Image();

      img.src = src;

      img.onload = () => {
        loadedCount++;

        if (loadedCount === images.length) {
          setLoading(false);
        }
      };
    });
  }, []);


  if (loading) {
    return (
      <div className="loader">
        <h2>Please Wait...</h2>
      </div>
    );
  }

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