import { Navigate, Route, Routes } from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/Home/Home';
import Results from './pages/Results/Results';

function App() {
  return (
 <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}

export default App
