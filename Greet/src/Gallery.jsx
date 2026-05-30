import gallery1 from "../public/image1.jpeg";
import gallery2 from "../public/image2.jpeg";
import gallery3 from "../public/image3.jpeg";
import gallery4 from "../public/image4.jpeg";
import { motion } from "framer-motion";
function Gallery() {
  const images = [gallery4,gallery1, gallery2, gallery3];

  return (
    <section id="gallery" className="gallery">
      <h2>Wedding Memories</h2>

      <div className="grid">
       {images.map((img, index) => (
  <motion.img
    key={index}
    src={img}
    alt=""
    className="gallery-image"
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.8,
      delay: index * 0.3,
    }}
  />
))}
      </div>
    </section>
  );
}

export default Gallery;