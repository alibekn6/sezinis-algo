import "./styles/App.css";
import { Layout } from "./components/layout";
import { HomePage } from "./pages/home";
import { Routes, Route } from "react-router-dom";
import { DashboardPage } from "./pages/dashboard";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard/:username" element={<DashboardPage />} />
      </Routes>

    </Layout>
  )
}

export default App;
