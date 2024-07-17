import { HashRouter, Route, Routes } from 'react-router-dom';
import { Landing } from './components/landing';
import Selec from './components/Selec';
import Setprompt from './components/Setprompt';
import Spinner from './components/ui/Spinner';
import { isLoadingAtom, loadingMsgAtom } from './atoms/globalAtom';
import { useAtom } from 'jotai';
import { Toaster } from './components/ui/toaster';
import Api from './components/Api';
import Chat from './components/Chat';
import About from './components/About';

function App() {


  const [loading,] = useAtom(isLoadingAtom);
  const [loadingMsg, ] = useAtom(loadingMsgAtom);

  return (
    <>

      
      <Spinner hidden={!loading} message={loadingMsg}/>
      <Toaster />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/select" element={<Selec />} />
          <Route path="/tune" element={<Setprompt />} />
          <Route path="/chat" element={<Chat />} />
        <Route path="/api" element={<Api />} />
        <Route path="/about" element={<About />} />
        </Routes>
      </HashRouter>

    </>
  );
}

export default App;
