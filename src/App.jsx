import { Routes, Route } from 'react-router-dom';

import Chat from './components/Chat';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Chat />} />
      </Routes>
    </div>
  );
}
