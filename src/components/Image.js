import React, { useState } from "react"
import Img from 'gatsby-image'

function Image({ product }) {
  let productImages = product.node.images
  const [currentImage, setCurrentImage] = useState(0)

  function prevImage() {
    setCurrentImage(currentImage - 1)
  }
  function nextImage() {
    setCurrentImage(currentImage + 1)
  }

  return (
    <div className="relative text-2xl">
      {/* object-top for image below */}
      <Img
        className="object-cover h-64 w-full"
        fluid={productImages[currentImage].fluid}
        alt={product.node.name}
      />
      <button
        disabled={currentImage === 0}
        className="absolute bottom-0 bg-black bg-opacity-50 text-white p-2 disabled:opacity-0"
        onClick={prevImage}
      >&#x2190;</button>
      <button
        className="absolute bottom-0 right-0 bg-black bg-opacity-50 text-white p-2 disabled:opacity-0"
        onClick={nextImage}
        disabled={currentImage >= (productImages.length - 1)}
      >&#x2192;</button>
    </div>
  )
}

export default Image
