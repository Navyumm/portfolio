"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";

function HeroSection() {
    return (
        <div className="h-[30rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md mb-5">
            
            <LampContainer>
                <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                >
                    WELCOME
                </motion.h1>
            </LampContainer>
            <div className="w-full absolute inset-0 h-screen">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />
            </div>
        </div>
    )
};

export default HeroSection