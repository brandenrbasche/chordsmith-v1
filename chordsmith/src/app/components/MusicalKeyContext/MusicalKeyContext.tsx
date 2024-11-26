'use client';
import {createContext, FC, ReactNode, useContext, useState} from 'react';
import {MusicalKeyContextType} from "@/lib/types/types";

// Define provider props:
interface KeyProviderProps {
    children: ReactNode;
}

// Create the context with default value as undefined:
export const MusicalKeyContext = createContext<MusicalKeyContextType | undefined>(undefined);

// Create the provider component:
export const MusicalKeyProvider: FC<KeyProviderProps> = ({ children }: KeyProviderProps) => {
    const [musicalKey, setMusicalKey] = useState<undefined | string>(undefined);

    const toggleMusicalKey = (keyword: string) => {
        console.log('logging keyword: ', keyword);
        setMusicalKey(keyword);
    }

    return (
        <MusicalKeyContext.Provider value={{ musicalKey, toggleMusicalKey }}>
            {children}
        </MusicalKeyContext.Provider>
    )
}

// Create custom hook for easier context consumption:
export const useMusicalKeyContext = (): MusicalKeyContextType => {
    const context = useContext(MusicalKeyContext);
    if (!context) {
        throw new Error('useKey must be used within a KeyProvider');
    }
    return context;
}