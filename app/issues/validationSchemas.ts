import { z } from "zod"

export const IssueTypeSchema = z.object({
    title: z.string().min(1, "title is required").max(255),
    description: z.string().min(1, {message: "description field is required"}).max(65535),
})

export const PatchIssueTypeSchema = z.object({
    title: z
    .string()
    .min(1, "title is required")
    .max(255)
    .max(65535)
    .optional(),

    description: z
    .string()
    .min(1, {message: "description field is required"})
    .max(65535)
    .optional(),

    assignedToUserId: z
    .string()
    .min(1, "AssignedToUserId is required")
    .max(255)
    .optional()
    .nullable()
})

