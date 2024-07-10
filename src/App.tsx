import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Landing } from './components/landing';
import Selec from './components/Selec';
import Setprompt from './components/Setprompt';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/select" element={<Selec />} />
        <Route path="/tune" element={<Setprompt />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
