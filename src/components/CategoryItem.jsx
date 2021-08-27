import React from 'react'

const CategoryItem = ({ category }) => {
    return (
        <a href="#" className="flex justify-center items-center rounded flex-col p-4">
            <img src={category.image} className="w-12 h-12 rounded-lg border border-red-900 object-cover" />
            <span className="text-sm font-semibold whitespace-nowrap block mt-2">{category.title}</span>
        </a>
    )
}

export default CategoryItem
