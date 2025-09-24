'use client'
import { Card, RadioGroup, Text } from "@radix-ui/themes";
import { useState, useContext } from "react";
import { Context } from './context/theme-context';

type FilterSidebarProps = {
    onTypeChange: (type: string) => void;
};

export default function FilterSidebar({ onTypeChange }: FilterSidebarProps) {
    const [open, setOpen] = useState(true);
    const themeContext = useContext(Context);
    const { isDark } = themeContext || { isDark: false };

    return (
        <aside aria-label="Sidebar for job filters">
            <button
                className={`md:hidden p-2 m-2 rounded transition-colors ${
                    isDark ? 'bg-blue-700 text-white' : 'bg-blue-600 text-white'
                }`}
                aria-label={open ? "Hide filters" : "Show filters"}
                onClick={() => setOpen((v) => !v)}
            >
                {open ? "Hide Filters" : "Show Filters"}
            </button>
            {open && (
                <div className={`min-w-64 py-10 md:bg-transparent transition-colors ${
                    isDark ? 'bg-black' : 'bg-white'
                }`} style={{ zIndex: 10 }}>
                    <div className="flex flex-col gap-4">
                        <div className={`p-4 rounded-lg border transition-colors ${
                            isDark 
                                ? 'bg-gradient-to-br from-purple-900/80 to-gray-900/90 border-purple-500/30 backdrop-blur-lg' 
                                : 'bg-gray-50 border-gray-200'
                        }`}>
                            <RadioGroup.Root name="employment-type" defaultValue="" onValueChange={onTypeChange}>
                                <div className="space-y-3">
                                    <RadioGroup.Item value="" >
                                        All
                                    </RadioGroup.Item>
                                    <RadioGroup.Item value="Full-time" >
                                        Full Time
                                    </RadioGroup.Item>
                                    <RadioGroup.Item value="Part-time" >
                                        Part Time
                                    </RadioGroup.Item>
                                    <RadioGroup.Item value="Contractor" >
                                        Contractor
                                    </RadioGroup.Item>
                                </div>
                            </RadioGroup.Root>
                        </div>
                    </div>
                </div>
            )}
        </aside>
    );
}