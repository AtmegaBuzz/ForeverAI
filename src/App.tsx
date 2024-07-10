import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Landing } from './components/landing';
import Selec from './components/Selec';
import Setprompt from './components/Setprompt';
import Spinner from './components/ui/Spinner';
import { isLoadingAtom, loadingMsgAtom } from './atoms/globalAtom';
import { useAtom } from 'jotai';
import { Toaster } from './components/ui/toaster';

function App() {


  const [loading,setLoading] = useAtom(isLoadingAtom);
  const [loadingMsg, setLoadingMsg] = useAtom(loadingMsgAtom);

  return (
    <>

      
      <Spinner hidden={!loading} message={loadingMsg}/>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/select" element={<Selec />} />
          <Route path="/tune" element={<Setprompt />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
