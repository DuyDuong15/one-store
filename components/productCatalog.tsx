import { IProduct } from '@/app/types/product';
import React from 'react'
import ProductCard from './productCard';

const ProductCatalog = ({ title, products }: { title: string; products: IProduct }) => {
    return (
        <section className='mb-12'>
            <h2 className='text-3xl font-bold mb-8 text-[#00FFFF]'>{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {
                    products.map((product: IProduct) => <ProductCard product={product} key={product.id} />)
                }
            </div>
        </section>
    )
}

export default ProductCatalog