import KeywordSelector from "@/app/components/ui/KeywordSelector";
import {MusicalKeyProvider} from "@/app/components/MusicalKeyContext/MusicalKeyContext";
import ChordEditorContainer from "@/app/components/ChordEditor/ChordEditorContainer";

export default function Home() {
  return (
    <div className="">
        <MusicalKeyProvider>
            <KeywordSelector />
            <ChordEditorContainer />
        </MusicalKeyProvider>
    </div>
  );
}
