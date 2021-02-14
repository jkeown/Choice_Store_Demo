import React from 'react'

function Button({ product }) {
    if (product.node.category === 'shirt') {

        return (
            <button className="snipcart-add-item border-2 border-yellow-600 font-bold text-yellow-700 px-4 py-2 hover:bg-yellow-600 hover:bg-yellow-600 hover:text-black"
                data-item-id={product.node.productId}
                data-item-price={product.node.price}
                data-item-url="/"
                data-item-name={product.node.name}
                data-item-custom1-name="Size"
                data-item-custom1-options="S|M|L|XL|XXL|XXXL"
                data-item-custom2-name="Color"
                data-item-custom2-options="Red|White|Black|Silver"
            >
                Add to Cart
            </button>
        )
    }
    else {
        return (
            <button className="snipcart-add-item border-2 border-yellow-600 font-bold text-yellow-700 px-4 py-2 hover:bg-yellow-600 hover:bg-yellow-600 hover:text-black"
                data-item-id={product.node.productId}
                data-item-price={product.node.price}
                data-item-url="/"
                data-item-name={product.node.name}
            >
                Add to Cart
            </button>
        )
    }
}

export default Button