import { z } from "zod"

export const IssueTypeSchema = z.object({
    title: z.string().min(1, "title is required").max(255),
    description: z.string().min(1, {message: "description field is required"}),
})