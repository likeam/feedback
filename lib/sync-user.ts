import { currentUser } from '@clerk/nextjs/server';
import React from 'react'
import prisma from './prisma';

export async function  syncCurrentUser() {
    try {
        const clerkUser = await currentUser();

        if (!clerkUser) {
            console.log('No user is currently signed in.');
            return null;    
     
        }
        const email = clerkUser.emailAddresses[0]?.emailAddress;

        if (!email) {
            console.log('User does not have an email address.');
            return null;
        }
        // check if user exists in our database
        let dbUser = await prisma.user.findUnique({
            where: { email },
        });
}
