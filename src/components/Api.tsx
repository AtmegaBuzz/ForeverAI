import { ConnectButton } from '@arweave-wallet-kit/react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';


function Api() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-indigo-900 flex flex-col items-center justify-start text-white">
      <nav className="w-full sticky top-0 z-50 flex justify-between items-center p-2 bg-gradient-to-r from-black to-indigo-900 mb-4">
        <div>
          <img src="public/logo.svg" alt="Logo" className="mr-2" />
          <span className="text-xl font-bold">ForeverAI</span>
        </div>
        <div className="flex space-x-4">
          <Link to="/" className="text-lg">Home</Link>
          <Link to="/about" className="text-lg">About</Link>
          <a href="#" className="translate-y-[-10px] transition-transform">
            <ConnectButton profileModal={true} showBalance={false} showProfilePicture={true} />
          </a>
        </div>
      </nav>
      <div className="w-full max-w-4xl bg-black/50 p-8 rounded-lg mb-86 -mt-0">
        <h2 className="text-lg mb-4">Here's how you can access the API for your custom chatbot</h2>
        <div className="border-2 border-dashed border-zinc-400 h-64"></div>
        <div className="mt-4 flex justify-start">
          <Button variant="outline" className="py-2 px-4 text-lg" onClick={() => navigate('/chat')}>back to chat</Button>
        </div>
  </div>
</div>
      
  );
}

export default Api;