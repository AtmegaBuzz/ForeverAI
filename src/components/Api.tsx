import React from 'react';
import { ConnectButton } from '@arweave-wallet-kit/react';

function Api() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-indigo-900 flex flex-col items-center justify-center text-white">    
      <header className="w-full flex justify-between items-center p-4">
        <div className="flex items-center">
          <img src="public/logo.svg" alt="Logo" className="mr-2" />
          <span className="text-xl font-bold">Malboro.AI</span>
        </div>
        <nav className="flex space-x-4">
          <a href="/" className="text-white hover:text-zinc-300">Home</a>
          <a href="/about" className="text-white hover:text-zinc-300">About</a>
          <a href="#" className="translate-y-[-10px] transition-transform">
  <ConnectButton profileModal={true} showBalance={false} showProfilePicture={true} />
</a>
        </nav>
      </header>
      <div className="w-full max-w-4xl bg-black/50 p-8 rounded-lg mt-2">
  <h2 className="text-lg mb-4">Here's how you can access the API for your custom chatbot</h2>
  <div className="border-2 border-dashed border-zinc-400 h-64"></div>
</div>
    </div>
  );
}

export default Api;