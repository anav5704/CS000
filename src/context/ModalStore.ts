import { atom } from 'nanostores'

export const isOpen = atom(false)

export const type = atom<"auth" | "account" | null>(null)
