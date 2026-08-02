import AppRoutes from "./routes/AppRoutes";
import FloatingAI from "./components/FloatingAI/FloatingAI";
function App() {
      console.log(import.meta.env.VITE_GEMINI_API_KEY);
    return (
        <>
            <AppRoutes />
        </>
    );
}

export default App;