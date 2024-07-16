import { useNavigate, useLocation } from 'react-router-dom';
import { ConnectButton, useConnection } from '@arweave-wallet-kit/react';
import { useState } from 'react';
import { isLoadingAtom, loadingMsgAtom } from '@/atoms/globalAtom';
import { useAtom } from 'jotai';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { NextButton } from './ui/Next';


function Setprompt() {
  const notify = () =>toast("We have removed the instruction fine-tuning feature for this demo. You can directly proceed to access the chat.");
  const location = useLocation();
  const navigate = useNavigate();

  const [,setLoading] = useAtom(isLoadingAtom);
  const [, setLoadingMsg] = useAtom(loadingMsgAtom);

  const { connected } = useConnection();
  // Corrected to use useNavigate hook
  const [inputValue, setInputValue] = useState('');

  const { llmName } = location.state || {};
  console.log(llmName);
  if (!connected) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <ConnectButton profileModal={true} showBalance={false} showProfilePicture={true} />
      </div>
    );
  }

  const addContext = async (): Promise<boolean> => {


    setLoading(true);
    setLoadingMsg("Tuning memory...");

    // const resp = await fetch("http://localhost:3000/api/set-context", {
    //   method: "POST",
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     "tune_prompt": inputValue
    //   })
    // });
    // const jsn = await resp.json();
    // console.log(jsn)
    setLoading(false);
    // console.log(resp.status)
    // if (resp.status !== 201) {
    //   toast({
    //     title: "Model Loaded",
    //     variant: "default",
    //     description: "Context Loaded to the memory",
    //     action: (
    //       <ToastAction altText="Close">Undo</ToastAction>
    //     ),
    //   })

      navigate('/chat');

      return true
    // } else {
    //   toast({
    //     title: "Model failed to Loaded",
    //     description: "Something went wrong",
    //     variant: "destructive",
    //     action: (
    //       <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
    //     ),
    //   })

    //   return false
    // }

  };


  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-indigo-900 flex flex-col items-center justify-center text-white">
      <header className="absolute top-0 left-0 w-full flex items-center justify-between p-4">
        <div className="flex items-center space-x-2">
          <div>
            <img src="/Logo.png" alt="Logo" className="h-20 w-20 rounded-2xl" />
          </div>
          <span className="text-xl font-bold">Forever AI</span>
        </div>
        <nav className="flex space-x-4">
        <Link to="/" className="text-lg">Home</Link>
        <Link to="/about" className="text-lg">About</Link>
          <a href="#" className="translate-y-[-10px] transition-transform">
            <ConnectButton profileModal={true} showBalance={false} showProfilePicture={true} />
          </a>
        </nav>
      </header>

      <main className="bg-black bg-opacity-50 backdrop-blur-md p-8 rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2">
        <div className="flex justify-center space-x-4 mb-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 flex items-center justify-center rounded-full border border-primary text-primary">1</div>
            <div className="w-16 border-t border-primary"></div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 flex items-center justify-center rounded-full border border-primary text-primary">2</div>
            <div className="w-16 border-t border-primary"></div>
          </div>
          <div className="w-8 h-8 flex items-center justify-center rounded-full border border-primary text-primary">3</div>
        </div>

        <h2 className="text-center text-xl mb-4">Set Instruction Prompt</h2>

        <div className="border-dashed border-2 border-zinc-400 p-4 mb-4">
          <input
            type="text"
            className="w-full bg-transparent border-none outline-none text-center"
            placeholder="You are a helpful AI assistant..."
            style={{ height: '50px' }}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <button
  className="bg-primary text-primary-foreground px-6 py-2 rounded hover:bg-primary/80 block mx-auto"
  onClick={notify}
>
          Browse Computer
        </button>

        <div className="flex justify-between mt-4">
        <NextButton
          className="border border-white p-2 rounded hover:bg-white hover:text-black transform rotate-180"
           onClick={() => navigate('/select')}
            >
             </NextButton>
          <NextButton
            className="border border-white p-2 rounded hover:bg-white hover:text-black"
            onClick={() => addContext()}
            disabled={!inputValue.trim()}
          >
            
          </NextButton>
        </div>
      </main>
      <ToastContainer />

    </div>
  );
}

export default Setprompt;