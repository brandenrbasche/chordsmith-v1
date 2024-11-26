'use client';

import {useEffect, useState} from 'react';
import {useMusicalKeyContext} from "@/app/components/MusicalKeyContext/MusicalKeyContext";
import musicalKeys from "@/lib/musicalKeys";

const KeywordSelector = () => {
    const [keywords, setKeywords] = useState<string[]>([]);
    const { toggleMusicalKey } = useMusicalKeyContext();
    const [attribute, setAttribute] = useState<string | null>(null);

    useEffect(() => {
        const keywordsTemp: string[] = [];

        const createKeywords = () => {
            for (const [key, value] of Object.entries(musicalKeys)) {
                keywordsTemp.push(...value.emotions);
            }
            setKeywords(keywordsTemp);
        }

        createKeywords();

    }, []);

    const musicalKeyClicked = (word: string, i: number) => {
        console.log(word);
        setAttribute(word);
        toggleMusicalKey(Object.entries(musicalKeys)[i][0]);
    }

    return (
        <div className='border p-4 mb-4'>
            <p>Selected keyword: {attribute}</p>
                <div className='border-box h-40 overflow-y-scroll'>
                    {keywords.map((keyword, i) => (
                        <button
                            className='inline-block text-wrap border rounded-full px-3 py-1 m-1'
                            key={i}
                            value={keyword}
                            onClick={() => musicalKeyClicked(keyword, i)}
                        >
                            {keyword}
                        </button>
                    ))}
                </div>
        </div>
    )
}

export default KeywordSelector;