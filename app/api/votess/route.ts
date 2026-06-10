import prisma from "@/lib/prisma";
import { syncCurrentUser } from "@/lib/sync-user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const dbUser = await syncCurrentUser();
    if (!dbUser) {
      return NextResponse.json(
        { error: "User not authenticated" },
        { status: 401 },
      );
    }
    const { postId } = await request.json();

    if (!postId) {
      return NextResponse.json(
        { error: "Post ID is required" },
        { status: 400 },
      );
    }

    // Check if the user has already voted for this post
    const existingVote = await prisma.vote.findUnique({
      where: {
        userId_postId: {
          userId: dbUser.id,
          postId: postId,
        },
      },
    });
    if (existingVote) {
      // Remove the existing vote
      await prisma.vote.delete({
        where: { id: existingVote.id },
      });
      return NextResponse.json({ voted: false });
    } else {
      // Create a new vote
      await prisma.vote.create({
        data: {
          userId: dbUser.id,
          postId: postId,
        },
      });
      return NextResponse.json({ voted: true });
    }
  } catch (error) {
    console.error("Error processing vote:", error);
    return NextResponse.json(
      { error: "Failed to process vote" },
      { status: 500 },
    );
  }
}
