'use client'
import { TextField } from '@radix-ui/themes'
import { CircleUserRound, Search } from 'lucide-react'
import { useRouter } from 'next/navigation';


import { useState } from 'react'

type SearchInputProps = {
    value: string;
    onChange: (value: string) => void;
};

export default function SearchInput({ value, onChange }: SearchInputProps) {
    const router = useRouter();
    function handleKeyDown(e : React.KeyboardEvent<HTMLInputElement>) {
        if(e.key === "Enter" && value && value.trim() !== "") {
            router.push("/search?q="+encodeURIComponent(value));
        }
    }
    return (
        <div className='flex items-center gap-6 relative'>
            <div className="relative group">
                <TextField.Root 
                    onChange={e=>onChange(e.target.value)} 
                    value={value} 
                    onKeyDown={handleKeyDown} 
                    placeholder="Search for jobs…"
                    className="relative z-10 bg-gray-900/80 border border-purple-500/30 rounded-full px-4 py-2 text-white placeholder-gray-400 focus:border-cyan-400 focus:shadow-lg backdrop-blur-lg"
                >
                    <TextField.Slot>
                        <Search height="20" width="20" className="text-purple-400" />
                    </TextField.Slot>
                </TextField.Root>
            </div>
            <div className="relative group">
                <CircleUserRound 
                    size={44} 
                    className="text-purple-400 cursor-pointer relative z-10" 
                />
            </div>
        </div>
    )
}