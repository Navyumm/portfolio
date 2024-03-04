import React from "react";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import { TypewriterEffectSmooth }  from "./ui/typewriter-effect";



const words = [
    {
        text: "Programmer,",
        className: "text-2xl text-blue-500 dark:text-blue-500",
    },
    {
        text: "Quick Learner",
        className: " text-2xl text-blue-500 dark:text-green-500",
    },
];

function heroSection() {
    return (
        <div className=" h-auto sm:h-[40vh] bg-black-900 text-gray-400 lg:py-10  sm:py-4">
            <div className="max-w-6xl lg:mt-14 sm:mt-0 lg:mx-24 sm:mx-10 grid grid-cols-1 md:grid-cols-2
            sm:grid-cols-2 lg:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8 ">

                <div>
                    <h1 className="text-white text-5xl font-semibold tracking-tight"><span className="text-blue-500 ">Hey,</span> I'm Nayyum 👋</h1>
                    <ul>
                        <li>
                        <TypewriterEffectSmooth words={words} />
                        </li>
                        <li>
                            <p className="text-md mb-10">Self-driven, quick starter, passionate programmer with a curious mind who enjoys solving problems and working on new projects.</p>
                        </li>
                        <li>
                        <Button
                            borderRadius="1.75rem "
                            className="bg-white dark:bg-gray-900 text-black dark:text-white border-neutral-200 dark:border-blue-500 "
                        >
                            Download Resume 
                        </Button>
                        </li>

                    </ul>
                </div>

                <div>
                    <h2 className="text-white lg:text-lg sm:text-md font-semibold lg:mb-4 sm:mb-0">Contact Us</h2>
                    <img src="../images/4.1.jpg" alt="hi" />
                    
                </div>
            </div>

        </div>

        // <div className="h-auto md:h-[40rem] w-full rounded-md 
        // flex flex-col items-center justify-center relative 
        // overflow-hidden mx-auto py-10 md:py-0"
        // >
        //     <Spotlight
        //         className="-top-40 left-0 md:left-60 md:-top-20"
        //         fill="white"
        //     />
        //     <div className="p-4 relative z-10 w-full text-left ml-[10rem]">
        //         <h1
        //             className="mt-20 md:mt-0 text-2xl md:text-5xl font-bold bg-clip-text  bg-gradient-to-b from-neutral-50 to-neutral-400"
        //         >
        //             Hey, I'm Nayyum 👋
        //         </h1>
                
        //         <TypewriterEffectSmooth words={words} />
        //         <p
        //             className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg "
        //         >
        //             Self-driven, quick starter, passionate programmer with a curious mind who enjoys solving problems and working on new projects.
        //         </p>
        //         <div className="mt-4">
        //             <Link href={"/courses"} >
        //                 <Button
        //                     borderRadius="1.75rem "
        //                     className="bg-white dark:bg-gray-900 text-black dark:text-white border-neutral-200 dark:border-blue-500 "
        //                 >
        //                     Resume Download
        //                 </Button>
        //             </Link>
        //         </div>
        //     </div>

        //     {/* <div className="p-4 relative z-10 w-full text-right">
        //         <h1>hiui 👋</h1>
        //     </div> */}

        // </div>
    )
}

export default heroSection