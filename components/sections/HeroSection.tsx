"use client";

import type React from "react";
import { SITE_CONFIG } from "@/lib/constants";
import Button from "@/components/ui/Button";
import { ArrowRight, Focus } from "lucide-react";
import { useRouter } from "next/navigation";

const HeroSection: React.FC = () => {
  const router = useRouter();

  const handleExploreClick = () => {
    router.push("/study-spaces");
  };

  const handleLearnMoreClick = () => {
    router.push("/about");
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/banner.jpg)",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />

      {/* Subtle Background Element */}
      <div className="absolute top-20 right-20 h-64 bg-blue-500/10 rounded-full blur-3xl" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
        <div className="text-center text-white mx-auto">
          {/* Main Heading */}
          <h1 className="mx-auto text-5xl md:text-7xl  mb-6">
            <span className="block text-white font-semibold">
              Find Your{" "}
              <span className="text-white px-2 rounded">
                Focus 🎯
              </span>
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-200 leading-relaxed">
            {SITE_CONFIG.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="flex items-center"
              onClick={handleExploreClick}
            >
              Explore Study Spaces
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-white/40 text-white hover:bg-white/10 px-8 py-3 rounded-lg transition-all duration-300 bg-transparent"
              onClick={handleLearnMoreClick}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
