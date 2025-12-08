
import SnapHome from './SnapHome'

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center select-none">
      <main className="flex h-screen w-full flex-col items-center justify-between py-32 px-16  sm:items-start">
        <SnapHome />
      </main>
    </div>
  );
}
