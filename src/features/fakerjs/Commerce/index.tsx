'use client';

import { Department } from './Department';
import { Isbn } from './Isbn';
import { Price } from './Price';
import { Product } from './Product';
import { ProductAdjective } from './ProductAdjective';
import { ProductDescription } from './ProductDescription';
import { ProductMaterial } from './ProductMaterial';
import { ProductName } from './ProductName';

import { useDict } from '@locale';
import { PageTitle } from '@/core/components/FakerSection';

export function CommercePage() {
    const t = useDict().commerce;

    return (
        <>
            <PageTitle title={t.title} />

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
