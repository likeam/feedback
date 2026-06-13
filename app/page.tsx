import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GradientHeader from "@/components/ui/gradient-header";
import {
  ArrowRight,
  BarChart,
  Map,
  MessageSquare,
  User,
  Users,
  Zap,
} from "lucide-react";
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
        <div className=" flex flex-rows gap-4 justify-center pt-4">
          <Button
            size="lg"
            className=" bg-white text-blue-600 hover:bg-gray-100 shadow-lg"
          >
            <Link href="/feedback/new" className=" flex items-center">
              Submit Feedback <ArrowRight className=" ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            size="lg"
            className=" bg-white text-blue-600 hover:bg-gray-100 shadow-lg"
          >
            <Link href="/feedback/roadmap" className=" flex items-center">
              View Roadmap <Map className=" ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </GradientHeader>
      {/* Feature Section */}
      <section>
        <h2 className=" text-3xl font-bold text-center mb-8">How It Works</h2>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader>
              <MessageSquare className=" mb-2 h-8 w-8 text-primary" />
              <CardTitle className=" ">Submit Ideas</CardTitle>
            </CardHeader>
            <CardContent>
              <p className=" text-muted-foreground">
                Share your suggestions and features requests with the community.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <BarChart className=" mb-2 h-8 w-8 text-primary" />
              <CardTitle className=" ">Vote & Prioritize</CardTitle>
            </CardHeader>
            <CardContent>
              <p className=" text-muted-foreground">
                Upvote ideas you love to help us understand what matters most.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Users className=" mb-2 h-8 w-8 text-primary" />
              <CardTitle className=" ">Track Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <p className=" text-muted-foreground">
                Follow the development of your favorite features and see them
                come to life.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Zap className=" mb-2 h-8 w-8 text-primary" />
              <CardTitle className=" ">See Results</CardTitle>
            </CardHeader>
            <CardContent>
              <p className=" text-muted-foreground">
                See the impact of your feedback and the features that have been
                implemented.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* Sats Section  */}
      <section className=" text-center">
        <div className=" inline-grid grid-cols-3 gap-8">
          <div className="">
            <div className=" text-3xl font-bold">1,234+</div>
            <div className=" text-muted-foreground">Suggestions</div>
          </div>
          <div className="">
            <div className=" text-3xl font-bold">8,901+</div>
            <div className=" text-muted-foreground">Votes Cast</div>
          </div>
          <div className="">
            <div className=" text-3xl font-bold">567+</div>
            <div className=" text-muted-foreground">Features Implemented</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
