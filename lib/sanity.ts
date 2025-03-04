import { createClient } from "next-sanity"

export const client = createClient({
    projectId: "dshrbbok",
    dataset: "production",
    apiVersion: "2025-01-01",
    useCdn: false
})