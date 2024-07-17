import { useState, ChangeEvent, KeyboardEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { SendButtonComponent } from  "../components/ui/Send"
import { Button } from "@/components/ui/button"
import Logo from "../assets/Logo.png";



interface Message {
  text: string;
  sender: 'user' | 'api';
}

function Chat() {
  const [inputValue, setInputValue] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isApiCallInProgress, setIsApiCallInProgress] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const fetchApiResponse = async () => {
    const resp = await fetch("http://4.240.82.191:3000/api/generate-prompt", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "prompt": inputValue.toString(),
        "tokens": "50"
    })
    });
    const jsn = await resp.json();
    console.log(jsn)

    return jsn.data;
  };


  const handleSendClick = async () => {
    if (inputValue.trim() !== '') {
      setMessages([...messages, { text: inputValue, sender: 'user' }]);
      setIsApiCallInProgress(true);

      setInputValue('');
      const apiResponse = await fetchApiResponse();
      setMessages((prevMessages) => [...prevMessages, { text: apiResponse, sender: 'api' }]);
      setIsApiCallInProgress(false);
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendClick();
    }
  };

  const handleViewApiClick = () => {
    navigate('/api');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-indigo-900 text-white p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <div>
            <img src={Logo} alt="Logo" className="h-20 w-20 rounded-2xl" />
          </div>
          <span className="text-xl font-bold">Forever AI</span>
        </div>
        <nav className="space-x-6">
          <Button variant="secondary"onClick={handleViewApiClick}>
            View API
            </Button>
          <Link to="/" className="text-lg">Home</Link>
          <Link to="/about" className="text-lg">About</Link>
          <a href="#" className="border border-white px-3 py-1 rounded hover:bg-white hover:text-black">Wallet</a>
        </nav>
      </div>
      <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
        <div className="bg-black bg-opacity-70 p-4 rounded-lg border border-zinc-700 min-h-[600px]">        <div className="text-center mb-4 text-lg font-semibold">Custom chat</div>
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`p-2 rounded-lg ${message.sender === 'user' ? 'bg-zinc-700' : 'bg-gray-500'}`}>{message.text}</div>
              </div>
            ))}
            {isApiCallInProgress && (
              <div className="flex justify-center">
                <img src="public/logo.svg" alt="Loading..." className="h-6 w-6 animate-spin" />
              </div>
            )}
          </div>
        </div>
        <div className="mt-4 flex items-center space-x-2">
          <input
            type="text"
            className="flex-grow bg-zinc-800 p-2 rounded-lg border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type a message..."
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
         <SendButtonComponent onClick={handleSendClick} />
        </div>
      </div>
    </div>
  );
}

export default Chat;