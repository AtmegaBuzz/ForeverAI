import { useNavigate, useLocation } from 'react-router-dom';
import { ConnectButton, useConnection } from '@arweave-wallet-kit/react';
import { useState } from 'react';
// import { isLoadingAtom, loadingMsgAtom } from '@/atoms/globalAtom';
// import { useAtom } from 'jotai';


function Setprompt() {
  const location = useLocation();
  const navigate = useNavigate();

  // const [loading,setLoading] = useAtom(isLoadingAtom);
  // const [loadingMsg, setLoadingMsg] = useAtom(loadingMsgAtom);

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

  // const addContext = async (): Promise<boolean> => {

  //   setLoading(true);
  //   setLoadingMsg("Tuning memory...");

  //   const resp = await fetch("http://localhost:3000/api/set-context", {
  //     method: "POST",
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       "tune_prompt": inputValue
  //     })
  //   });

  //   setLoading(false);
  //   console.log(resp.status)
  //   if (resp.status !== 201) {
  //     toast({
  //       title: "Model Loaded",
  //       variant: "default",
  //       description: selectedLLM + " Loaded successfully into memory",
  //       action: (
  //         <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
  //       ),
  //     })

  //     return true
  //   } else {
  //     toast({
  //       title: "Model failed to Loaded",
  //       description: "Something went wrong",
  //       variant: "destructive",
  //       action: (
  //         <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
  //       ),
  //     })

  //     return false
  //   }

  // };


  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-indigo-900 flex flex-col items-center justify-center text-white">
      <header className="absolute top-0 left-0 w-full flex items-center justify-between p-4">
        <div className="flex items-center space-x-2">
          <img src="public/logo.svg" alt="Logo" className="w-10 h-10" />
          <span className="text-xl font-bold">Malboro.AI</span>
        </div>
        <nav className="flex space-x-4">
          <a href="/">Home</a>
          <a href="/about" className="hover:underline">About</a>
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
          onClick={() => alert("Uploading larger prompts from local machine is reserved for paid users")}
        >
          Browse Computer
        </button>

        <div className="flex justify-between mt-4">
          <button
            className="border border-white p-2 rounded hover:bg-white hover:text-black"
            onClick={() => navigate('/select')}
          >
            <img aria-hidden="true" alt="Navigate left" src="https://openui.fly.dev/openui/24x24.svg?text=⬅️" />
          </button>
          <button
            className="border border-white p-2 rounded hover:bg-white hover:text-black"
            onClick={() => navigate('/chat')}
            disabled={!inputValue.trim()} // Disable button if inputValue is empty or only contains whitespace
          >
            <img aria-hidden="true" alt="Navigate right" src="https://openui.fly.dev/openui/24x24.svg?text=➡️" />
          </button>
        </div>
      </main>
    </div>
  );
}

export default Setprompt;