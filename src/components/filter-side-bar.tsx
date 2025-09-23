'use client'
import { Card, RadioGroup, Text } from "@radix-ui/themes";
// ...existing code...

type FilterSidebarProps = {
    onTypeChange: (type: string) => void;
};

import { useState } from "react";

export default function FilterSidebar({ onTypeChange }: FilterSidebarProps) {
    const [open, setOpen] = useState(true);

    return (
        <aside aria-label="Sidebar for job filters">
            <button
                className="md:hidden p-2 m-2 bg-blue-700 text-white rounded"
                aria-label={open ? "Hide filters" : "Show filters"}
                onClick={() => setOpen((v) => !v)}
            >
                {open ? "Hide Filters" : "Show Filters"}
            </button>
            {open && (
                <div className="min-w-64 py-10 bg-black md:bg-transparent" style={{ zIndex: 10 }}>
                    <div className="flex flex-col gap-4">
                        <Card className="bg-gradient-to-br from-purple-900/80 to-gray-900/90 border border-purple-500/30 backdrop-blur-lg">
                            <Text className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-4">Employment type:</Text>
                            <RadioGroup.Root name="employment-type" defaultValue="" onValueChange={onTypeChange}>
                                <div className="space-y-3">
                                    <RadioGroup.Item 
                                        value="" 
                                        className="text-white"
                                    >
                                        All
                                    </RadioGroup.Item>
                                    <RadioGroup.Item 
                                        value="Full-time" 
                                        className="text-white"
                                    >
                                        Full Time
                                    </RadioGroup.Item>
                                    <RadioGroup.Item 
                                        value="Part-time" 
                                        className="text-white"
                                    >
                                        Part Time
                                    </RadioGroup.Item>
                                    <RadioGroup.Item 
                                        value="Contractor" 
                                        className="text-white"
                                    >
                                        Contractor
                                    </RadioGroup.Item>
                                </div>
                            </RadioGroup.Root>
                        </Card>
                    </div>
                </div>
            )}
        </aside>
    );
}