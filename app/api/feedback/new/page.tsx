import { Button } from "@/components/ui/button";
import GradientHeader from "@/components/ui/gradient-header";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default async function FeedbackPage() {
  // Get the userId from clerk
  const { userId } = await auth();

  const posts = await prisma.post.findMany({
    include: {
      author: true,
      votes: true,
    },
    orderBy: { createdAt: "desc" },
  });

  const categories = await prisma.post.groupBy({
    by: ["category"],
    _count: true,
  });

  return (
    <div className=" space-y-6">
      <GradientHeader
        title="Community Feedback"
        subtitle="Explore, vote, and contribute to  the feature that matter most"
      >
        <div className=" flex flex-rows gap-4 justify-center pt-4">
          <Button
            asChild
            size="lg"
            className=" bg-white text-blue-600 hover:bg-gray-100 shadow-lg"
          >
            <Link href="/feedback/new" className=" flex items-center">
              Submit Feedback <ArrowRight className=" ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            className=" bg-white text-blue-600 hover:bg-gray-100 shadow-lg"
          >
            <Link href="/feedback/roadmap" className=" flex items-center">
              View Roadmap <Map className=" ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </GradientHeader>
    </div>
  );
}
