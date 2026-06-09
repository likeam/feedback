import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    // Check if user is admin
    const user = await prisma.user.findUnique({
      where: { clerkUserId: userId },
    });
    if (!user || user.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const { status } = await request.json();
    const feedbackId = await params.then((p) => p.id);
    const updatedFeedback = await prisma.feedback.update({
      where: { id: feedbackId },
      data: { status },
    });
    return NextResponse.json(updatedFeedback);
  } catch (error) {
    console.error("Error updating feedback status:", error);
    return NextResponse.json(
      { error: "Failed to update feedback status" },
      { status: 500 },
    );
  }
}
