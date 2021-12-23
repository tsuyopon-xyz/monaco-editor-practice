import type { NextPage } from 'next';
import { HorizontalSplit } from '@/components/sprits/Horizontal';
import { MonacoEditor } from '@/components/editors/monaco';

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-red-200">
      <header className="bg-blue-400 py-4 px-4 z-10 h-16">
        <h1 className="text-2xl text-white font-bold ">
          プログラミング学習用エディタ
        </h1>
      </header>

      <main className="h-[calc(100%-8rem)]">
        <HorizontalSplit>
          <div className="h-full">
            <MonacoEditor />
          </div>
          <div className="h-full">右</div>
        </HorizontalSplit>
      </main>

      <footer className="bg-gray-700 text-center py-4 h-16">
        <span className="text-white font-bold">Web白熱教室</span>
      </footer>
    </div>
  );
};

export default Home;
