"use client";
import React from "react";

const GradientHeader = ({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) => {
  return (
    <div className=" bg-gradient-to-r from-blue-500 to-purple-500 p-6 text-white rounded-lg">
      <div className=" relative z-10">
        <h1 className=" text-4xl font-bold">{title}</h1>
        {subtitle && (
          <p className=" mt-2 text-lg text-white/90 max-w-2xl">{subtitle}</p>
        )}
        {children}
      </div>
    </div>
  );
};

export default GradientHeader;
