import { useRef, useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { ExerciseLibrary } from './components/ExerciseLibrary';
import { WorkoutEditor } from './components/WorkoutEditor';
import { AerobicEditor } from './components/AerobicEditor';
import { AerobicSummary } from './components/AerobicSummary';
import { AutoplayEditor } from './components/AutoplayEditor';
import { DEFAULT_BLOCKS } from './types/aerobic';
import type { AerobicWorkout } from './types/aerobic';

export type LibraryExercise = {
  name: string;
  category: string;
  equipment: string;
};

type Page = 'strict' | 'aerobico' | 'autoplay';

function useHashRoute(): [Page, (p: Page) => void] {
  const getPage = (): Page => {
    const hash = window.location.hash.replace('#/', '').replace('#', '');
    if (hash === 'aerobico') return 'aerobico';
    if (hash === 'autoplay') return 'autoplay';
    return 'strict';
  };

  const [page, setPageState] = useState<Page>(getPage);

  useEffect(() => {
    const handler = () => setPageState(getPage());
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  const setPage = (p: Page) => {
    window.location.hash = `#/${p}`;
  };

  return [page, setPage];
}

export function App() {
  const [page] = useHashRoute();
  const addExerciseFnRef = useRef<((ex: LibraryExercise) => void) | null>(null);

  // Shared aerobic workout state (so summary sidebar can read it)
  const [aerobicWorkout] = useState<AerobicWorkout>({
    workoutName: 'Novo Treino Aeróbico',
    workoutStartDate: '',
    workoutEndDate: '',
    workoutDescription: '',
    sport: 'running',
    blocks: DEFAULT_BLOCKS,
  });

  return (
    <div className="min-h-screen bg-white flex">
      <Sidebar />

      <main className="flex-1 ml-16 mr-0 xl:mr-80 transition-all duration-300">
        {page === 'strict' && (
          <WorkoutEditor
            onRegisterAdd={(fn) => {
              addExerciseFnRef.current = fn;
            }}
          />
        )}
        {page === 'aerobico' && <AerobicEditor />}
        {page === 'autoplay' && (
          <AutoplayEditor
            onRegisterAdd={(fn) => {
              addExerciseFnRef.current = fn;
            }}
          />
        )}
      </main>

      {/* Right sidebar changes per page */}
      {(page === 'strict' || page === 'autoplay') && (
        <ExerciseLibrary
          onAddExercise={(ex) => addExerciseFnRef.current?.(ex)}
        />
      )}
      {page === 'aerobico' && <AerobicSummary workout={aerobicWorkout} />}
    </div>
  );
}
