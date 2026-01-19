
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Guides from './pages/Guides';
import Schemes from './pages/Schemes';
import Login from './pages/Login';
import Register from './pages/Register';
import Income from './pages/Income';
import UrbanFarming from './pages/UrbanFarming';
import Community from './pages/Community';
import Chat from './pages/Chat';
import ChatWidget from './components/features/ChatWidget';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="guides" element={<Guides />} />
            <Route path="schemes" element={<Schemes />} />
            <Route path="income" element={<Income />} />
            <Route path="urban-farming" element={<UrbanFarming />} />
            <Route path="community" element={<Community />} />
            <Route path="chat" element={<Chat />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <ChatWidget />
      </Router>
    </AuthProvider>
  );
}

export default App;
