import { PageTitle } from '@/core/components/FakerSection';

import { Department } from './Department';
import { Isbn } from './Isbn';
import { Price } from './Price';
import { Product } from './Product';
import { ProductAdjective } from './ProductAdjective';
import { ProductDescription } from './ProductDescription';
import { ProductMaterial } from './ProductMaterial';
import { ProductName } from './ProductName';

export function CommercePage() {
    return (
        <>
            <PageTitle title='Commerce 🛒' />

            <Department />
            <Isbn />
            <Price />
            <Product />
            <ProductAdjective />
            <ProductDescription />
            <ProductMaterial />
            <ProductName />
        </>
    );
}
