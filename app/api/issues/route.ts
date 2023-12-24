import { IssueTypeSchema } from "@/app/issues/validationSchemas";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import authOptions from "@/app/auth/authOptions";

export async function POST(request: NextRequest){
    // Securing Route
    const session = await getServerSession(authOptions)
    if(!session) return NextResponse.json({}, { status:401 })

    const body = await request.json()
    const validation = IssueTypeSchema.safeParse(body)

    if(!validation.success){
        return NextResponse.json(validation.error.message, { status:400 })
    }

    const newIssue = await prisma.issue.create({
        data: {
            title: body.title,
            description: body.description
        }
    })

    return NextResponse.json(newIssue, { status: 201 })
}