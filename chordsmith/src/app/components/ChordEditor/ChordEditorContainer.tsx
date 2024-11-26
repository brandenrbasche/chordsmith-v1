'use client';
import { useMusicalKeyContext } from "@/app/components/MusicalKeyContext/MusicalKeyContext";

const ChordEditorContainer = () => {
    const { musicalKey } = useMusicalKeyContext();
    return (
        <div>
            <p>Key: {musicalKey}</p>
        </div>
    )
}

export default ChordEditorContainer;