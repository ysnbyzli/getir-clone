import React, { useEffect, useState } from 'react'
import productData from '../api/products.json'
import ProductItem from './ProductItem';

const Favorites = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(productData)
    })

    return (
        <div className="sm:container mx-auto">
            <h3 className="text-sm font-semibold mb-3">Favoriler</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10">
                {
                    products && products.map(product => (
                        <ProductItem key={product.id} product={product} />
                    ))
                }
            </div>
        </div>
    )
}

export default Favorites
