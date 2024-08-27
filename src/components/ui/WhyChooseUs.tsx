"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";


const musicSchoolContent = [
    {
      title: "Collaborative Learning",
      description:
        "Join group classes or private lessons with our expert instructors. Engage with fellow students in real-time, share feedback, and enhance your musical skills through collaborative learning. Our platform fosters a supportive environment where students can learn and grow together.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Collaborative Learning
        </div>
      ),
    },
    {
      title: "Real-Time Practice Feedback",
      description:
        "Get instant feedback on your practice sessions. Our platform allows instructors to provide real-time comments and suggestions, helping you improve quickly. See your progress as it happens and refine your technique with immediate guidance.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src="/music-practice-feedback.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="music practice feedback demo"
          />
        </div>
      ),
    },
    {
      title: "Lesson Recordings and Playback",
      description:
        "Never miss a lesson with our recording feature. Review past classes and practice sessions at your convenience. This helps you stay up-to-date with your learning and ensures that you are always practicing with the most accurate information.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Lesson Recordings and Playback
        </div>
      ),
    },
    {
      title: "Expanding Your Repertoire",
      description:
        "Access a vast library of music pieces and exercises designed to challenge and inspire you. Our curated collection helps you explore different genres and styles, ensuring you are always learning something new and exciting.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Expanding Your Repertoire
        </div>
      ),
    },
  ];
  


function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={musicSchoolContent} />
    </div>
  )
}

export default WhyChooseUs