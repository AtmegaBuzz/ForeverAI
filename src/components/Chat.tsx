import { useState, ChangeEvent, KeyboardEvent } from 'react';
import { useNavigate } from 'react-router-dom';

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
    const response = await new Promise<{ text: string }>((resolve) =>
      setTimeout(() => resolve({ text: "This is a response from the API." }), 2000)
    );
    return response.text;
  };

  const handleSendClick = async () => {
    if (inputValue.trim() !== '') {
      setMessages([...messages, { text: inputValue, sender: 'user' }]);
      setInputValue('');
      setIsApiCallInProgress(true);
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
          <img src="public/logo.svg" alt="logo" className="h-6 w-6" />
          <span className="font-bold text-xl">Malbora-AI</span>
        </div>
        <nav className="space-x-6">
        <button className="bg-blue-500 p-2 rounded-full" onClick={handleViewApiClick}>
            View API
          </button>
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About</a>
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
          <button className="bg-blue-500 p-2 rounded-full hover:bg-blue-600" onClick={handleSendClick}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;