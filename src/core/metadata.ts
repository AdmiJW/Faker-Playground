import type { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
};

export const metadata: Metadata = {
    title: 'Faker Playground',
    description: 'Play with Faker.js',
    authors: [{ name: 'AdmiJW' }],
    keywords: ['faker.js', 'faker', 'playground', 'fake data'],
    other: {
        'darkreader-lock': 'true',
    },
};
