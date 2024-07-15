import back from "../assets/back.png";
import { useNavigate } from "react-router-dom";
function About() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/select');
  };

  return (
    <div className="relative" style={{ height: '100vh', overflow: 'hidden' }}> {/* Ensure the page fits the viewport and hides overflow */}
      <div style={{
        backgroundImage: `url(${back})`,
        backgroundSize: 'cover',
        transform: 'rotate(180deg) scaleX(-1)',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}></div>
      <div className="flex items-center justify-center text-foreground p-4 h-full"> {/* Use h-full to fill the parent without exceeding */}
        <div className="max-w-6xl w-full bg-black bg-opacity-67 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center space-y-4">
        <h1 className="text-3xl font-bold ">Permanence Redefined</h1>
        <p className="text-muted-foreground">
          worlds first decentralized AI inference solution powered by Arweave and AO.
        </p>
        <ul className="space-y-2">
          <li className="flex items-start space-x-2">
            <span className="text-primary">✔️</span>
            <p>
              <strong>One-Click Inference & Deployment.</strong> Easily deploy custom LLMs compatible with lama.cpp, streamlining your on chain AI integration process on AO.
            </p>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-primary">✔️</span>
            <p>
              <strong>Infrastructure for On-Chain AI.</strong> Providing the necessary infrastructure for companies aiming to utilize AI on AO at scale.
            </p>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-primary">✔️</span>
            <p>
              <strong>Custom Model Inference.</strong> Enable companies to deploy and have inference to custom on chain models tailored for their specific use cases.
            </p>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-primary">✔️</span>
            <p>
              <strong>API Inference for Web 2.0 Clients.</strong> We also provide API inference to models, facilitating seamless integration for web 2.0 clients.
            </p>
          </li>
        </ul>
        <button onClick={handleClick} className="bg-primary text-primary-foreground hover:bg-primary/80 p-3 rounded-lg">
      Book a live Demo
    </button>
        <p className="text-muted-foreground">we provide on demand Demo currently.</p>
      </div>
      <div className="flex items-center justify-center">
        <img src="https://placehold.co/600x400" alt="Demo video thumbnail" className="rounded-lg shadow-lg" />
        
      </div>
     
    
      </div>
      </div>
      </div>
     
        </div>
    
    
  );
}

export default About
