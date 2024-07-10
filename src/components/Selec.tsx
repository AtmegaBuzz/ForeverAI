import React, { useEffect, useState } from 'react';
import { ConnectButton, useConnection } from '@arweave-wallet-kit/react';
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD

interface SelectProps {}
=======
import { useAtom } from 'jotai';
import { isLoadingAtom, loadingMsgAtom } from '@/atoms/globalAtom';
import { useToast } from './ui/use-toast';
import { ToastAction } from '@radix-ui/react-toast';

interface SelectProps { }
>>>>>>> f7e0e63 (load model integration)

const Selec: React.FC<SelectProps> = () => {
  const { connected } = useConnection();
  const [selectedLLM, setSelectedLLM] = useState<string | null>(null);
<<<<<<< HEAD
  const [models, setModels] = useState<any>({});

=======
  const [loading,setLoading] = useAtom(isLoadingAtom);
  const [loadingMsg, setLoadingMsg] = useAtom(loadingMsgAtom);
  const { toast } = useToast()

  const AdmissableList =
  {
    "GPT-2 117M model": "XOJ8FBxa6sGLwChnxhF2L71WkKLSKq1aU5Yn5WnFLrY", // GPT-2 117M model.
    "GPT-2-XL 4-bit quantized model": "M-OzkyjxWhSvWYF87p0kvmkuAEEkvOzIj4nMNoSIydc", // GPT-2-XL 4-bit quantized model.
    "Phi-2": "kd34P4974oqZf2Db-hFTUiCipsU6CzbR6t-iJoQhKIo", // Phi-2 
    "Phi-3 Mini 4k Instruct": "ISrbGzQot05rs_HKC08O_SmkipYQnqgB1yC3mjZZeEo", // Phi-3 Mini 4k Instruct
    "CodeQwen 1.5 7B Chat q3": "sKqjvBbhqKvgzZT4ojP1FNvt4r_30cqjuIIQIr-3088", // CodeQwen 1.5 7B Chat q3
    "Llama3 8B Instruct q4": "Pr2YVrxd7VwNdg6ekC0NXWNKXxJbfTlHhhlrKbAd1dA", // Llama3 8B Instruct q4
    "Llama3 8B Instruct q8": "jbx-H6aq7b3BbNCHlK50Jz9L-6pz9qmldrYXMwjqQVI"  // Llama3 8B Instruct q8
  }


>>>>>>> f7e0e63 (load model integration)
  const navigate = useNavigate();

  const handleLLMClick = (llmName: string) => {
    setSelectedLLM(llmName);
  };

  const navigateNextPage = async () => {

    if (selectedLLM) {
<<<<<<< HEAD
      navigate('/tune', { state: { llmName: selectedLLM } });
=======
      let res = await loadModel();
      if (res == true) {
        navigate('/tune', { state: { llmName: selectedLLM } });
      }
>>>>>>> f7e0e63 (load model integration)
    } else {
      toast({
        title: "Select LLM",
        description: "Please select LLM before porocceding",
        variant: "destructive",
        action: (
          <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
        ),
      })      
    }

  };

<<<<<<< HEAD
  const fetchModels = async () => {
    const resp = await fetch("http://localhost:3001/api/get-models");
    const jsn = await resp.json(); // Correctly await the JSON conversion
    setModels(jsn);
  };

  useEffect(() => {
    fetchModels(); // Call fetchModels inside useEffect
  }, []);
=======
  const entries = Object.entries(AdmissableList).map(([key, val]) => (
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
        title: "Model failed to Loaded",
        description: "Something went wrong",
        variant: "destructive",
        action: (
          <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
        ),
      })

      return false
    }

  };

  // useEffect(() => {
  //   fetchModels(); // Call fetchModels inside useEffect
  // }, []);
>>>>>>> f7e0e63 (load model integration)

  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-blue-900 text-white flex flex-col items-center p-4">
      <header className="w-full flex justify-between items-center p-4">
        <div className="flex items-center">
          <img src="https://placehold.co/40x40" alt="Logo" className="mr-2" />
          <span className="text-xl font-bold">Select LLM</span>
        </div>
        <nav className="flex space-x-4">
          <a href="/" className="text-white hover:text-zinc-300">Home</a>
          <a href="/about" className="text-white hover:text-zinc-300">About</a>
          <a href="#" className="hover:text-black">
            <ConnectButton profileModal={true} showBalance={false} showProfilePicture={true} />
          </a>
        </nav>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center">
        <div className="bg-zinc-800 bg-opacity-80 p-8 rounded-lg shadow-lg w-full max-w-3xl" style={{ backdropFilter: 'blur(10px)' }}>
          <h2 className="text-center text-2xl mb-6">Choose a LLM</h2>
          <p className="text-center text-md mb-6">Selected: {selectedLLM}</p>
          <div className="grid grid-cols-2 gap-4">

            {
              entries
            }
          </div>
          <div className="flex justify-end mt-8">
            <button onClick={() => navigateNextPage()} className="border border-white p-2 rounded">
              <img src="https://openui.fly.dev/openui/24x24.svg?text=➡" alt="right arrow" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Selec;