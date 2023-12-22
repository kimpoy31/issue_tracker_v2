import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import authOptions from "@/app/auth/authOptions";

export async function GET(request: NextRequest){
    // Securing Route
    const session = await getServerSession(authOptions)
    if(!session) return NextResponse.json({}, { status:401 })

    const users = await prisma.user.findMany()

    return NextResponse.json(users, { status: 200 })
}