export interface MusicalKey {
    emotions: string[];
    notes: string[];
}

export interface MusicalKeys {
    [key: string]: MusicalKey;
}

export interface MusicalKeyContextType {
    musicalKey: string | undefined;
    toggleMusicalKey: (musicalKey: string) => void;
}
