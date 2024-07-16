// Ensure React is in scope when using JSX
import { Link } from "react-router-dom";
import back from "../assets/back.png";
import { ConnectButton } from "@arweave-wallet-kit/react";
import About from './About';
import { Arrow } from "./arrow";

export function Landing() {
 

  // Function to navigate to /about
  
  return (
    <>
    <div className="scrollableWithoutScrollbar" style={{ backgroundImage: `url(${back})`, backgroundSize: 'cover', height: '100vh' }}>
      <header className="flex items-center justify-between p-6">
        <div className="flex items-center space-x-2">
          <div>
            <img src="/Logo.png" alt="Logo" className="h-20 w-20 rounded-2xl" />
          </div>
          <span className="text-xl font-bold">Forever AI</span>
        </div>
        <nav className="flex items-center space-x-6">
          <Link to="/" className="text-lg">Home</Link>
          <Link to="/about" className="text-lg">About</Link>
          <a href="#" className="text-lg border border-white px-4 py-1 rounded">
            <ConnectButton
              profileModal={true}
              showBalance={false}
              showProfilePicture={true}
            />
          </a>
        </nav>
      </header>
      <div className="mt-48">
        <main className="flex flex-col items-center justify-center flex-1 text-center">
          <h1 className="text-8xl font-bold mb-8 tracking-wider">One Stop Solution</h1>
          <h2 className="text-8xl font-bold mb-8 tracking-wider">For All LLMs on AO</h2>
         <Arrow />
        </main>
      </div>
    </div>
    <About />
  </>
);
}

