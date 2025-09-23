import { Avatar, Heading } from '@radix-ui/themes'
import { CircleUserRound, Search } from 'lucide-react'
import SearchInput from './search-input'
import Link from 'next/link'
import { useState } from 'react';

export default function Header() {
    const [search, setSearch] = useState("");
    return (
        <header className="h-[10vh] px-6 md:px-10 sticky top-0 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 z-50 flex justify-between items-center shadow-2xl rounded-b-3xl border-b-2 border-purple-500/30 backdrop-blur-lg">
            <Link href={'/'} className="flex items-center gap-5 group relative">
                <Avatar
                    size="3"
                    fallback="N"
                    radius="full"
                    src="https://static.vecteezy.com/system/resources/thumbnails/013/061/846/small/job-logo-design-job-search-icon-with-magnifying-glass-choose-people-for-hire-symbol-job-or-employee-logo-free-vector.jpg"
                    className="relative z-10"
                />
                <Heading className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-3xl font-extrabold relative z-10">
                    Next Hire
                </Heading>
            </Link>
            <div className="flex items-center gap-4 relative">
                <SearchInput value={search} onChange={setSearch} /> 
            </div>
        </header>
    );
}