import { z, defineCollection } from 'astro:content'

const SoloLessonsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
    }),
})

const TeamLessonsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
    }),
})

const ProLessonsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
    }),
})

const BonusLessonsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
    }),
})

export const collections = {
    'solo': SoloLessonsCollection,
    'team': TeamLessonsCollection,
    'pro': ProLessonsCollection,
    'bonus': BonusLessonsCollection,
}