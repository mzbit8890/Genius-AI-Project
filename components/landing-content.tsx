"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const testimonials = [
    {
        name: "Munazza",
        avatar: "M",
        title: "Web Developer",
        description: "The Genius AI Platform is a game-changer! From chatbot code generation to image and video creation, it offers a comprehensive suite of tools that have transformed my workflow.!"
    },
    {
        name: "Sana",
        avatar: "S",
        title: "Web Developer",
        description: "As a developer, I've tried numerous AI platforms, but the Genius AI Platform stands out. Its seamless integration of chatbot, image, and video generation sets it apart from the rest."
    },
    {
        name: "Rimsha",
        avatar: "M",
        title: "Doctor",
        description: "I've been using the Genius AI Platform for my digital projects, and it's been nothing short of amazing. The integrated features make it a one-stop solution for all my AI needs."
    },
    {
        name: "Ayesha",
        avatar: "A",
        title: "Lawyer",
        description: "Impressed by the capabilities of the Genius AI Platform! It's user-friendly, efficient, and offers unparalleled results. A must-have for anyone looking to leverage AI technology."
    }
]

export const LandingContent = () => {
    return (
        <div className="px-10 pb-20">
            <h2 className="text-center text-4xl text-white font-extrabold mb-10">
                Testimonials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {testimonials.map((items) => (
                    <Card key={items.description} className="bg-[#192339] border-none text-white">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-x-2">
                                <div>
                                    <p className="text-lg">{items.name}</p>
                                    <p className="text-zinc-400 text-sm">{items.title}</p>
                                </div>
                            </CardTitle>
                            <CardContent className="pt-4 px-0">
                                {items.description}
                            </CardContent>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    )
}