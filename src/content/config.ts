import { z, defineCollection } from 'astro:content'

const SoloLessonsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        id: z.number()
    }),
})

const TeamLessonsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        id: z.number()
    }),
})

const ProLessonsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        id: z.number()
    }),
})

const BonusLessonsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        id: z.number()
    }),
})

export const collections = {
    'solo': SoloLessonsCollection,
    'team': TeamLessonsCollection,
    'pro': ProLessonsCollection,
    'bonus': BonusLessonsCollection,
}