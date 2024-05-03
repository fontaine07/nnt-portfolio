import { React, useState } from 'react'
import "./ArtGallery.css"
import img1 from "../../assets/images/art/1.jpg"
import img2 from "../../assets/images/art/2.jpg"
import img3 from "../../assets/images/art/3.jpg"
import img4 from "../../assets/images/art/4.jpg"
import img5 from "../../assets/images/art/5.jpg"
import img6 from "../../assets/images/art/6.jpg"
import img7 from "../../assets/images/art/7.jpg"
import img8 from "../../assets/images/art/8.jpg"
import img9 from "../../assets/images/art/9.jpg"
import img10 from "../../assets/images/art/10.jpg"
import img11 from "../../assets/images/art/11.jpg"
import img14 from "../../assets/images/art/14.jpg"
import img15 from "../../assets/images/art/15.jpg"
import img16 from "../../assets/images/art/16.jpg"


const images = [
  { src: img1, alt: "Image 01" },
  { src: img2, alt: "Image 02" },
  { src: img3, alt: "Image 03" },
  { src: img4, alt: "Image 04" },
  { src: img5, alt: "Image 05" },
  { src: img6, alt: "Image 06" },
  { src: img7, alt: "Image 07" },
  { src: img8, alt: "Image 08" },
  { src: img9, alt: "Image 09" },
  { src: img10, alt: "Image 10" },
  { src: img11, alt: "Image 11" },
  { src: img14, alt: "Image 14" },
  { src: img15, alt: "Image 15" },
  { src: img16, alt: "Image 16" },
]

const ArtGallery = () => {
  const [lightboxImage, setLightboxImage] = useState("")
  const [lightboxAltImage, setLightboxAltImage] = useState("")

  const openLightbox = (src, alt) => {
    setLightboxImage(src)
    setLightboxAltImage(alt)
  }

  const closeLightbox = () => {
    setLightboxImage("")
    setLightboxAltImage("")
  }

  return (
    <div className='gallery-section'>
      <div className="gallery">
        {images.map((image, index) => (
          <button
            type="button"
            className="gallery-item"
            key={index}
            onClick={() => openLightbox(image.src, image.alt)}
          >
            <img className="gallery-image" src={image.src} alt={image.alt} />
          </button>
        ))}
      </div>

      {lightboxImage && (
        <div className="lightbox">
          <button
            type="button"
            className="lightbox-close-button"
            onClick={closeLightbox}
          >
            &times;
          </button>
          <img
            className="lightbox-image"
            src={lightboxImage}
            alt={lightboxAltImage}
          />
          <button
            type="button"
            className="lightbox-bg"
            onClick={closeLightbox}
          />
        </div>
      )}
    </div>
  )
}

export default ArtGallery
