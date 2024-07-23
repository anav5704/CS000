import type { ImageMetadata } from "astro"

import { atom } from 'nanostores'

export const isOpen = atom(false)

export const type = atom<"auth" | "account" | "media" | null>(null)

export const media = atom<ImageMetadata | null>(null)
