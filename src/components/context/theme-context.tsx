'use client'
import { Theme } from "@radix-ui/themes";
import { createContext, useState } from "react";
import Header from "../header";

import { ReactNode } from "react";
export const Context = createContext<{ isDark: boolean; setIsDark: (v: boolean) => void } | undefined>(undefined);

export default function ThemeContextProvider({ children }: { children: ReactNode }) {
    const [isDark, setIsDark] = useState(true)
    return (
        <Context.Provider value={{
            isDark,
            setIsDark
        }}>
            <Theme appearance={isDark ? "dark" : "light"}>
                <Header />
                {children}
            </Theme>
        </Context.Provider>
    )
}