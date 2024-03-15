import { Routes, Route } from 'react-router-dom';

import Chat from './components/Chatbox/Chat';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Chat />} />
      </Routes>
    </div>
  );
}
