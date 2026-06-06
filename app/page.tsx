import { Button } from "@/components/ui/button";
import GradientHeader from "@/components/ui/gradient-header";
import { ArrowRight, Map } from "lucide-react";
import Link from "next/link";

import React from "react";

const Home = () => {
  return (
    <div className=" space-y-12">
      {/* Hero Section */}
      <GradientHeader
        title="Shape the Future of Product"
        subtitle="Feedback is where your ideas come to life. Share your thoughts, vote on features, and help us build a product you'll love."
      >
        <div className=" flex gap-4 justify-center pt-4">
          <Button
            asChild
            size="lg"
            className=" bg-white text-blue-600 hover:bg-gray-100"
          >
            <Link href="/feedback/new">
              Submit Feedback <ArrowRight className=" ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            className=" bg-white text-blue-600 hover:bg-gray-100"
          >
            <Link href="/feedback/roadmap">
              View Roadmap <Map className=" ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </GradientHeader>
      {/* Feature Section */}
      {/* Stats Section */}
    </div>
  );
};

export default Home;
