import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
<<<<<<< HEAD
  base: "/vanshportfolio/",   // ✅ ADD THIS LINE HERE

=======
>>>>>>> a1e9ca453d220c784d2f96e163b02fe00a058d1f
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
<<<<<<< HEAD

  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),

=======
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
>>>>>>> a1e9ca453d220c784d2f96e163b02fe00a058d1f
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
<<<<<<< HEAD
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
=======
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
>>>>>>> a1e9ca453d220c784d2f96e163b02fe00a058d1f
  },
}));
