import React, { useState } from 'react';
import { ConnectButton, useConnection } from '@arweave-wallet-kit/react';
import { useNavigate } from 'react-router-dom'; // Updated import

function Selec() {
  const { connected } = useConnection();
  const [selectedLLM, setSelectedLLM] = useState<string | null>(null);
  const navigate = useNavigate(); // Updated to use useNavigate

  const handleLLMClick = (llmName: string) => {
    setSelectedLLM(llmName);
  };

  const navigateNextPage = () => {
    if (selectedLLM) {
        navigate('/next-page', { state: { llmName: selectedLLM } })// Updated to use navigate function
    } else {
      alert('Please select an LLM first.');
    }
  };

  if (!connected) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <ConnectButton profileModal={true} showBalance={false} showProfilePicture={true} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-blue-900 text-white flex flex-col items-center p-4">
      <header className="w-full flex justify-between items-center p-4">
        <div className="flex items-center">
          <img src="https://placehold.co/40x40" alt="Logo" className="mr-2" />
          <span className="text-xl font-bold">Select LLM</span>
        </div>
        <nav className="flex space-x-4">
          <a href="#" className="text-white hover:text-zinc-300">Home</a>
          <a href="#" className="text-white hover:text-zinc-300">About</a>
          <a href="#" className="hover:text-black">
            <ConnectButton profileModal={true} showBalance={false} showProfilePicture={true} />
          </a>
        </nav>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center">
        <div className="bg-zinc-800 bg-opacity-80 p-8 rounded-lg shadow-lg w-full max-w-3xl" style={{ backdropFilter: 'blur(10px)' }}>
          <h2 className="text-center text-2xl mb-6">Choose a LLM</h2>
          <div className="grid grid-cols-2 gap-4">

            {/* assume karr thah ki api uses llm  name instead of the ID  */}
            <button onClick={() => handleLLMClick('Llama3 8B Instruct q8')} className="bg-blue-700 text-white py-2 px-4 rounded">Llama3 8B Instruct q8</button>
            <button onClick={() => handleLLMClick('GPT-2 117M model')} className="bg-blue-700 text-white py-2 px-4 rounded">GPT-2 117M model</button>
            <button onClick={() => handleLLMClick('GPT-2-XL 4-bit quantized model')} className="bg-blue-700 text-white py-2 px-4 rounded">GPT-2-XL 4-bit quantized model</button>
            <button onClick={() => handleLLMClick('Phi-2')} className="bg-blue-700 text-white py-2 px-4 rounded">Phi-2</button>
            <button onClick={() => handleLLMClick('CodeQwen 1.5 7B Chat q3')} className="bg-blue-700 text-white py-2 px-4 rounded">CodeQwen 1.5 7B Chat q3</button>
            <button onClick={() => handleLLMClick('Phi-3 Mini 4k Instruct')} className="bg-blue-700 text-white py-2 px-4 rounded">Phi-3 Mini 4k Instruct</button>
            <button onClick={() => handleLLMClick('Llama3 8B Instruct q4')} className="bg-blue-700 text-white py-2 px-4 rounded">Llama3 8B Instruct q4</button>
          </div>
          <div className="flex justify-end mt-8">
            <button onClick={navigateNextPage} className="border border-white p-2 rounded">
              <img src="https://openui.fly.dev/openui/24x24.svg?text=➡" alt="right arrow" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Selec;