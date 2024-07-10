import React, { useState } from 'react';
import { ConnectButton } from '@arweave-wallet-kit/react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useAtom } from 'jotai';
import { isLoadingAtom, loadingMsgAtom } from '@/atoms/globalAtom';
import { useToast } from './ui/use-toast';
import { ToastAction } from '@radix-ui/react-toast';

interface SelectProps { }

const Selec: React.FC<SelectProps> = () => {
  const [selectedLLM, setSelectedLLM] = useState<string | null>(null);
  const [,setLoading] = useAtom(isLoadingAtom);
  const [, setLoadingMsg] = useAtom(loadingMsgAtom);
  const { toast } = useToast()

  const AdmissableList =
  {
    "GPT-2 117M model": "XOJ8FBxa6sGLwChnxhF2L71WkKLSKq1aU5Yn5WnFLrY",
    "GPT-2-XL 4-bit quantized model": "M-OzkyjxWhSvWYF87p0kvmkuAEEkvOzIj4nMNoSIydc",
    "Phi-2": "kd34P4974oqZf2Db-hFTUiCipsU6CzbR6t-iJoQhKIo",
    "Phi-3 Mini 4k Instruct": "ISrbGzQot05rs_HKC08O_SmkipYQnqgB1yC3mjZZeEo",
    "CodeQwen 1.5 7B Chat q3": "sKqjvBbhqKvgzZT4ojP1FNvt4r_30cqjuIIQIr-3088",
    "Llama3 8B Instruct q4": "Pr2YVrxd7VwNdg6ekC0NXWNKXxJbfTlHhhlrKbAd1dA",
    "Llama3 8B Instruct q8": "jbx-H6aq7b3BbNCHlK50Jz9L-6pz9qmldrYXMwjqQVI"
  }

  const navigate = useNavigate();

  const handleLLMClick = (llmName: string) => {
    setSelectedLLM(llmName);
  };

  const navigateNextPage = async () => {
    if (selectedLLM) {
      let res = await loadModel();
      if (res == true) {
        navigate('/tune', { state: { llmName: selectedLLM } });
      }
    } else {
      toast({
        title: "Select LLM",
        description: "Please select LLM before proceeding",
        variant: "destructive",
        action: (
          <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
        ),
      })      
    }
  };

  const entries = Object.entries(AdmissableList).map(([key,]) => (
    <button onClick={() => handleLLMClick(key)} className="bg-blue-700 text-white py-2 px-4 rounded hover:scale-105">{key}</button>
  ));

  const loadModel = async (): Promise<boolean> => {
    setLoading(true);
    setLoadingMsg("Loading LLM into memory...");

    const resp = await fetch("http://localhost:3000/api/load-model", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "model": selectedLLM
      })
    });

    setLoading(false);
    console.log(resp.status)
    if (resp.status !== 201) {
      toast({
        title: "Model Loaded",
        variant: "default",
        description: selectedLLM + " Loaded successfully into memory",
        action: (
          <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
        ),
      })

      return true
    } else {
      toast({
        title: "Model failed to Load",
        description: "Something went wrong",
        variant: "destructive",
        action: (
          <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
        ),
      })

      return false
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-indigo-900 flex flex-col items-center justify-center text-white">
      <header className="w-full flex justify-between items-center p-4">
        <div className="flex items-center">
          <img src="/logo.svg" alt="Logo" className="mr-2" />
          <span className="text-xl font-bold">Malboro.AI</span>
        </div>
        <nav className="flex space-x-4">
          <Link to="/" className="text-white hover:text-zinc-300">Home</Link> {/* Replace href with Link to */}
          <Link to="/about" className="text-white hover:text-zinc-300">About</Link> {/* Replace href with Link to */}
          <a href="#" className="translate-y-[-10px] transition-transform">
            <ConnectButton profileModal={true} showBalance={false} showProfilePicture={true} />
          </a>
        </nav>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center">
        <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg w-full max-w-3xl" style={{ backdropFilter: 'blur(10px)' }}>
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

          <h2 className="text-center text-2xl mb-6">Choose a LLM</h2>
          <p className="text-center text-md mb-6">Selected: {selectedLLM}</p>
          <div className="grid grid-cols-2 gap-4">
            {entries}
          </div>
          <div className="flex justify-end mt-8">
            <button onClick={() => navigateNextPage()} className="border border-white p-2 rounded hover:bg-white hover:text-black">
              <img src="https://openui.fly.dev/openui/24x24.svg?text=➡" alt="right arrow" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Selec;
