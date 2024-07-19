/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

import type { User } from "@auth/core/types"

declare namespace App {
    interface Locals {
        user: User
    }
}


