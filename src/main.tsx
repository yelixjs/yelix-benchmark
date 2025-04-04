import { createRoot } from 'react-dom/client';
import BenchmarkComparison from './App.tsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import T1 from './T1.tsx';

function IndexPage() {
  return (
    <div className="flex flex-col items-center gap-2 justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold underline">Hello!</h1>
      <p>Welcome to the benchmark comparison webpage.</p>
      <a href="/hono" className="text-sky-600 hover:text-sky-700 cursor-pointer flex flex-col items-center hover:underline">
        <span>Yelix vs Hono</span> <span className="text-xs">(which actually Yelix is Hono based)</span>
      </a>
      <a href="/others" className="text-sky-600 hover:text-sky-700 cursor-pointer flex flex-col items-center hover:underline">
        <span>Yelix vs Other Frameworks</span>
      </a>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="">
        <Route index element={<IndexPage />} />
        <Route path="hono" element={<BenchmarkComparison />} />
        <Route path="others" element={<T1 />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
