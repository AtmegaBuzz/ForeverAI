import React from 'react';
import { useLocation } from 'react-router-dom';


function Setprompt() {
    const location = useLocation();
    const { llmName } = location.state || {};
    console.log(llmName);
  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-indigo-900 flex flex-col items-center justify-center text-white">
      <header className="absolute top-0 left-0 w-full flex items-center justify-between p-4">
        <div className="flex items-center space-x-2">
          <img src="https://placehold.co/40x40" alt="Logo" className="w-10 h-10" />
          <span className="text-xl font-bold">HillTop</span>
        </div>
        <nav className="flex space-x-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="border border-white px-3 py-1 rounded hover:bg-white hover:text-black">Wallet</a>
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
  <input type="text" className="w-full bg-transparent border-none outline-none text-center" placeholder="Enter your prompt here..." style={{ height: '50px' }} />
</div>
<button 
  className="bg-primary text-primary-foreground px-6 py-2 rounded hover:bg-primary/80 block mx-auto"
  onClick={() => alert("Uploading larger prompts from local machine is reserved for paid users")}
>
  Browse Computer
</button>
        

        <div className="flex justify-between mt-4">
          <button className="border border-white p-2 rounded hover:bg-white hover:text-black">
            <img aria-hidden="true" alt="Navigate left" src="https://openui.fly.dev/openui/24x24.svg?text=⬅️" />
          </button>
          <button className="border border-white p-2 rounded hover:bg-white hover:text-black">
            <img aria-hidden="true" alt="Navigate right" src="https://openui.fly.dev/openui/24x24.svg?text=➡️" />
          </button>
        </div>
      </main>
    </div>
  );
}

export default Setprompt;