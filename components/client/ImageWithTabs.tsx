"use client";

import { useState } from "react";
import CustomButton from "@/components/ui/Button";
import Image from "next/image";

export default function ImageWithTabs() {
        const [activeTab, setActiveTab] = useState("Organize");
        return (
                <section className="border-t-gray-500 bg-white py-16">
                        <div className="mx-auto px-4 max-w-6xl">
                                {/* Tabs */}
                                <div className="flex gap-2 justify-center mb-8">
                                        <CustomButton
                                                label="Organize Applications"
                                                className={`rounded-lg px-6 py-3 text-sm transition-colors 
                ${activeTab === "Organize" ? "bg-black text-emerald-300" : "bg-blue-500 text-white"}`}
                                                onClick={() => setActiveTab("Organize")} />
                                        <CustomButton label="Get Hired" className={`rounded-lg px-6 py-3 text-sm transition-colors 
                ${activeTab === "Hired" ? "bg-black text-emerald-300" : "bg-blue-500 text-white"}`}
                                                onClick={() => setActiveTab("Hired")} />
                                        <CustomButton label="Manage Boards" className={`rounded-lg px-6 py-3 text-sm transition-colors 
                ${activeTab === "Boards" ? "bg-black text-emerald-300" : "bg-blue-500 text-white"}`}
                                                onClick={() => setActiveTab("Boards")} />
                                </div>
                                <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-gray-200 shadow-xl">
                                        {activeTab === "Organize" && <Image src="/hero1.png" alt="Organize Applications" width={1200} height={800} />}
                                        {activeTab === "Hired" && <Image src="/hero2.png" alt="Get Hired" width={1200} height={800} />}
                                        {activeTab === "Boards" && <Image src="/hero3.png" alt="Manage Boards" width={1200} height={800} />}
                                </div>
                        </div>
                </section>
        );
}