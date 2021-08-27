import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

const ProductItem = ({ product }) => {
    return (
        <div className="bg-white p-3">
            <picture className="relative block">
                <button className="w-8 h-8 flex absolute top-0 right-2 border shadow-md rounded-lg border-gray-200 items-center justify-center text-purple-700 bg-white transition-all hover:bg-purple-50 ">
                    <AiOutlinePlus />
                </button>
                <img src={product.image} alt={product.title} className="w-full" />
            </picture>
            <div className="flex flex-col items-center text-center gap-y-1">
                <div className="text-sm font-semibold text-purple-700">{new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(product.price)}</div>
                <div className="text-sm font-semibold">{product.title}</div>
                <div className="text-sm font-semibold text-gray-500">{product.alt}</div>
            </div>
        </div>
    )
}

export default ProductItem
