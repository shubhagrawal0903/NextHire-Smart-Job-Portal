import { User, ChevronDown, Settings, LogOut, UserCircle, Sun, Moon } from 'lucide-react'
import { Button, Switch } from '@radix-ui/themes'
import SearchInput from './search-input'
import Link from 'next/link'
import { useState, useRef, useEffect, useContext } from 'react';
import { Context } from './context/theme-context'
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  useUser,
  useClerk,
} from "@clerk/nextjs";

export default function Header() {
    const [search, setSearch] = useState("");
    const [showUserMenu, setShowUserMenu] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const { user } = useUser();
    const { signOut, openUserProfile } = useClerk();
    const themeContext = useContext(Context);
    const { isDark, setIsDark } = themeContext || { isDark: false, setIsDark: () => {} };

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setShowUserMenu(false);
            }
        }
        
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    
    return (
        <header className={`h-16 px-6 border-b flex justify-between items-center transition-colors ${
            isDark 
                ? 'bg-gray-900 border-gray-700' 
                : 'bg-white border-gray-200'
        }`}>
            {/* Logo */}
            <Link href={'/'} className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">NH</span>
                </div>
                <h1 className={`text-xl font-semibold transition-colors ${
                    isDark ? 'text-white' : 'text-gray-900'
                }`}>
                    Next Hire
                </h1>
            </Link>
            
            {/* Right Section */}
            <div className="flex items-center gap-4">
                <SearchInput value={search} onChange={setSearch} />
                
                {/* Theme Toggle */}
                <div className="flex items-center gap-2">
                    <Sun className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-yellow-500'}`} />
                    <Switch 
                        checked={isDark}
                        onCheckedChange={setIsDark}
                        size="2"
                    />
                    <Moon className={`w-4 h-4 ${isDark ? 'text-blue-400' : 'text-gray-400'}`} />
                </div>
                
                <SignedOut>
                    <div className="flex items-center gap-2">
                        <SignInButton mode="modal">
                            <Button variant="ghost" size="2">
                                Sign In
                            </Button>
                        </SignInButton>
                        <SignUpButton mode="modal">
                            <Button size="2">
                                Sign Up
                            </Button>
                        </SignUpButton>
                    </div>
                </SignedOut>

                <SignedIn>
                    <div ref={dropdownRef} className="relative">
                        {/* Custom User Button */}
                        <button
                            onClick={() => setShowUserMenu(!showUserMenu)}
                            className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors ${
                                isDark
                                    ? 'bg-gray-800 hover:bg-gray-700 border-gray-600'
                                    : 'bg-gray-50 hover:bg-gray-100 border-gray-200'
                            }`}
                        >
                            {user?.imageUrl ? (
                                <img 
                                    src={user.imageUrl} 
                                    alt="Profile"
                                    className="w-6 h-6 rounded-full"
                                />
                            ) : (
                                <UserCircle className={`w-6 h-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`} />
                            )}
                            <span className={`text-sm font-medium ${
                                isDark ? 'text-gray-200' : 'text-gray-700'
                            }`}>
                                {user?.firstName || user?.username || 'User'}
                            </span>
                            <ChevronDown className={`w-4 h-4 transition-transform ${
                                isDark ? 'text-gray-400' : 'text-gray-500'
                            } ${showUserMenu ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Custom Dropdown Menu */}
                        {showUserMenu && (
                            <div className={`absolute right-0 top-full mt-2 w-48 rounded-lg shadow-lg z-50 border ${
                                isDark
                                    ? 'bg-gray-800 border-gray-600'
                                    : 'bg-white border-gray-200'
                            }`}>
                                <div className="py-1">
                                    {/* User Info */}
                                    <div className={`px-4 py-3 border-b ${
                                        isDark ? 'border-gray-600' : 'border-gray-100'
                                    }`}>
                                        <p className={`text-sm font-medium ${
                                            isDark ? 'text-gray-100' : 'text-gray-900'
                                        }`}>
                                            {user?.fullName || user?.username || 'User'}
                                        </p>
                                        <p className={`text-xs ${
                                            isDark ? 'text-gray-400' : 'text-gray-500'
                                        }`}>
                                            {user?.primaryEmailAddress?.emailAddress}
                                        </p>
                                    </div>
                                    
                                    {/* Menu Items */}
                                    <button
                                        onClick={() => {
                                            openUserProfile();
                                            setShowUserMenu(false);
                                        }}
                                        className={`w-full flex items-center gap-3 px-4 py-2 text-sm transition-colors ${
                                            isDark
                                                ? 'text-gray-200 hover:bg-gray-700'
                                                : 'text-gray-700 hover:bg-gray-50'
                                        }`}
                                    >
                                        <Settings className="w-4 h-4" />
                                        Manage account
                                    </button>
                                    
                                    <button
                                        onClick={() => {
                                            signOut();
                                            setShowUserMenu(false);
                                        }}
                                        className={`w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 transition-colors ${
                                            isDark ? 'hover:bg-red-900/20' : 'hover:bg-red-50'
                                        }`}
                                    >
                                        <LogOut className="w-4 h-4" />
                                        Sign out
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </SignedIn>
            </div>
        </header>
    );
}