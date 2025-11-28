import { defineCollection, z } from 'astro:content';

const productsCollection = defineCollection({
    type: 'data',
    schema: z.object({
        id: z.string(),
        modelName: z.string(),
        price: z.number(),
        oldPrice: z.number(),
        description: z.string(),
        features: z.array(z.string()),
        colors: z.array(z.object({
            name: z.string(),
            hex: z.string(),
            imageUrl: z.string(),
            gallery: z.array(z.string()),
        })),
    }),
});

export const collections = {
    products: productsCollection,
};
