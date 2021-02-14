import React from "react"
import Image from "./Image"
import Button from "./Button"

function Product({ product }) {
  return (
    <div style={{ minWidth: 275, background: '#f5f6fa' }} className="w-2/12 border border-black mb-8 text-blue-800 pb-2">
      <div>
        <Image product={product} />
      </div>
      <div className="flex flex-col p-2 leading-8">
        <h3 className="font-bold text-blue-700 text-2xl">{product.node.name}</h3>
        <p style={{ 'min-width': 65 }} className="leading-4 font-bold text-blue-900 text-md text-right">
          $ {product.node.price}
        </p>
      </div>
      <div style={{ minHeight: 50 }}>
        <p className="text-blue-900 text-lg px-2">
          {product.node.description}
        </p>
      </div>
      <div className="text-center p-4">
        <Button product={product} />
      </div>
    </div>
  )
}

export default Product
