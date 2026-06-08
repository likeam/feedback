import { currentUser } from "@clerk/nextjs/server";
import React from "react";
import prisma from "./prisma";

export async function syncCurrentUser() {
  try {
    const clerkUser = await currentUser();

    if (!clerkUser) {
      console.log("No user is currently signed in.");
      return null;
    }
    const email = clerkUser.emailAddresses[0]?.emailAddress;

    if (!email) {
      console.log("User does not have an email address.");
      return null;
    }
    // check if user exists in our database
    let dbUser = await prisma.user.findUnique({
      where: { clerkUserId: clerkUser.id },
    });
    if (dbUser) {
      dbUser = await prisma.user.update({
        where: { id: dbUser.id },
        data: {
          email: email,
          name: `${clerkUser.firstName || ""} ${clerkUser.lastName || ""}`.trim(),
          image: clerkUser.imageUrl,
        },
      });
    } else {
      // Create a new user if they don't exist
      dbUser = await prisma.user.create({
        data: {
          clerkUserId: clerkUser.id,
          email: email,
          name: `${clerkUser.firstName || ""} ${clerkUser.lastName || ""}`.trim(),
          image: clerkUser.imageUrl,
        },
      });
    }
    return dbUser;
  } catch (error) {
    console.error("Error syncing user:", error);
    return null;
  }
}
