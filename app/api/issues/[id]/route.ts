import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { IssueTypeSchema } from "@/app/issues/IssueType";
import { getServerSession } from "next-auth";
import authOptions from "@/app/auth/authOptions";

export async function PATCH(request: NextRequest, { params }: { params: {id: string} }){
    // Securing route
    const session = await getServerSession(authOptions)
    if(!session) return  NextResponse.json({}, { status:401 })

    const body = await request.json()

    // Validate fields
    const validation = IssueTypeSchema.safeParse(body)
    if(!validation.success){
        return NextResponse.json(validation.error.errors, { status: 400 } )
    }

    // Validate if issue exists
    const validId = await prisma.issue.findUnique({
        where: {
            id: parseInt(params.id)
        }
    })

    if(!validId) {
        return NextResponse.json({error: "Invalid Id"}, { status: 404 } )
    }

    // Update issue
    const updatedIssue = await prisma.issue.update({
        where: {
            id: parseInt(params.id)
        },
        data: {
            title: body.title,
            description: body.description
        }
    })

    return NextResponse.json(updatedIssue, { status: 201 })
}

export async function DELETE(request: NextRequest, { params }: { params: {id: string} }){
    // Securing route
    const session = await getServerSession(authOptions)
    if(!session) return  NextResponse.json({}, { status:401 })
    
    // Validate if issue exists
    const validId = await prisma.issue.findUnique({
        where: {
            id: parseInt(params.id)
        }
    })

    if(!validId) {
        return NextResponse.json({error: "Invalid Id"}, { status: 404 } )
    }

    // Delete issue
    const updatedIssue = await prisma.issue.delete({
        where: {
            id: parseInt(params.id)
        }
    })

    return NextResponse.json(updatedIssue, { status: 201 })
}