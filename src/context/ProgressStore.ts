import { deepMap } from 'nanostores'

interface Progress {
    soloCompleted: number[]
    teamCompleted: number[]
    proCompleted: number[]
    bonusCompleted: number[]
}

export const progress = deepMap({
    soloCompleted: <number[]>[],
    teamCompleted: <number[]>[],
    proCompleted: <number[]>[],
    bonusCompleted: <number[]>[],
})

export function addItem(type: keyof Progress, item: number): void {
    const currentArray = progress.get()[type]
    progress.setKey(type, [...currentArray, item])
}

export function removeItem(type: keyof Progress, item: number): void {
    const currentArray = progress.get()[type]
    progress.setKey(type, currentArray.filter(i => i !== item))
}