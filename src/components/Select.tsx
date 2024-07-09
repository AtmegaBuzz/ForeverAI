import React from 'react';

function Select() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-blue-900 text-white flex flex-col items-center p-4">
      <header className="w-full flex justify-between items-center p-4">
        <div className="flex items-center">
          <img src="https://placehold.co/40x40" alt="HillTop logo" className="mr-2" />
          <span className="text-xl font-bold">HillTop</span>
        </div>
        <nav className="flex space-x-4">
          <a href="#" className="text-white hover:text-zinc-300">Home</a>
          <a href="#" className="text-white hover:text-zinc-300">About</a>
          <a href="#" className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black">Wallet</a>
        </nav>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center">
        <div className="bg-zinc-800 bg-opacity-70 p-8 rounded-lg shadow-lg w-full max-w-3xl">
          <div className="flex justify-center space-x-8 mb-8">
            <div className="flex items-center space-x-2">
              <span className="w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full">1</span>
              <span className="text-zinc-400">────</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-8 h-8 flex items-center justify-center border border-zinc-400 text-zinc-400 rounded-full">2</span>
              <span className="text-zinc-400">────</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-8 h-8 flex items-center justify-center border border-zinc-400 text-zinc-400 rounded-full">3</span>
            </div>
          </div>
          <h2 className="text-center text-2xl mb-6">Choose a LLM</h2>
          <div className="grid grid-cols-2 gap-4">
            {/* Buttons for LLM options */}
            <button className="bg-blue-700 text-white py-2 px-4 rounded">Llama3 8B Instruct q8</button>
            <button className="bg-blue-700 text-white py-2 px-4 rounded">GPT-2 117M model.</button>
            <button className="bg-blue-700 text-white py-2 px-4 rounded">GPT-2-XL 4-bit quantized model.</button>
            <button className="bg-blue-700 text-white py-2 px-4 rounded">Phi-2</button>
            <button className="bg-blue-700 text-white py-2 px-4 rounded">CodeQwen 1.5 7B Chat q3</button>
            <button className="bg-blue-700 text-white py-2 px-4 rounded">Random NFT metadata (1.7kb of JSON)</button>
            <button className="bg-blue-700 text-white py-2 px-4 rounded">Phi-3 Mini 4k Instruct</button>
            <button className="bg-blue-700 text-white py-2 px-4 rounded">Llama3 8B Instruct q4</button>
            <button className="bg-blue-700 text-white py-2 px-4 rounded">Phi-3 Mini 4k Instruct</button>
          </div>
          <div className="flex justify-between mt-8">
            <button className="border border-white p-2 rounded">
              <img src="https://openui.fly.dev/openui/24x24.svg?text=⬅" alt="left arrow" />
            </button>
            <button className="border border-white p-2 rounded">
              <img src="https://openui.fly.dev/openui/24x24.svg?text=➡" alt="right arrow" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Select;
