import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout";

// Lazy load pages
const Home = lazy(() => import("../pages/home"));
const About = lazy(() => import("../pages/about"));
const Counter = lazy(() => import("../features/counter/counter"));
const Auth = lazy(() => import("../features/auth/auth"));

export default function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Layout wrapper for pages with sidebar + top menu */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/auth" element={<Auth />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
