"use client";
import Image from "next/image";
import React from "react";
import backgroundImage from "@/assets/background6.jpg";

const HeroPage = () => {
  return (
    <div className="h-screen relative">
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="background image"
          layout="fill"
          objectFit="contain" //Adjusted to 'cover' for proper filling 
          className="blur-sm"
        />
      </div>

            
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="bg-green-900 text-white p-10">
          <h1 className="text-3xl font-bold">Web</h1>
          <p>Content goes here</p>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
