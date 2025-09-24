'use client'
import { TextField } from '@radix-ui/themes'
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation';
import { useContext } from 'react'
import { Context } from './context/theme-context'

type SearchInputProps = {
    value: string;
    onChange: (value: string) => void;
};

export default function SearchInput({ value, onChange }: SearchInputProps) {
    const router = useRouter();
    const themeContext = useContext(Context);
    const { isDark } = themeContext || { isDark: false };

    function handleKeyDown(e : React.KeyboardEvent<HTMLInputElement>) {
        if(e.key === "Enter" && value && value.trim() !== "") {
            router.push("/search?q="+encodeURIComponent(value));
        }
    }
    
    return (
        <div className='flex items-center relative'>
            <TextField.Root 
                onChange={e=>onChange(e.target.value)} 
                value={value} 
                onKeyDown={handleKeyDown} 
                placeholder="Search for jobs…"
                size="2"
                variant="surface"
                className="w-64"
            >
                <TextField.Slot>
                    <Search height="16" width="16" />
                </TextField.Slot>
            </TextField.Root>
        </div>
    )
}