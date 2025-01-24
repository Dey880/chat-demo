import { Routes, Route } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import NotFound from "./pages/404";
import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ChatPage />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/chat/:roomId" element={<ChatPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}