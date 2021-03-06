import type { NextPage } from 'next';
import { HorizontalSplit } from '@/components/sprits/Horizontal';
import { Editor } from '@/components/editors/monaco/Editor';
import { Preview } from '@/components/editors/monaco/Preview';
import { EditorPane, InstractionPane, PreviewPane } from '@/components/panes';

const Home: NextPage = () => {
  return (
    <div className="h-screen">
      <header className="bg-blue-400 py-4 px-4 z-10 h-16">
        <h1 className="text-2xl text-white font-bold ">
          つよげーと（仮） by Web白熱教室
        </h1>
      </header>

      <main className="h-[calc(100%-8rem)]">
        <HorizontalSplit>
          <InstractionPane />
          <EditorPane />
          <PreviewPane />
        </HorizontalSplit>
      </main>

      <footer className="bg-gray-700 text-center py-4 h-16">
        <span className="text-white font-bold">Web白熱教室</span>
      </footer>
    </div>
  );
};

export default Home;
