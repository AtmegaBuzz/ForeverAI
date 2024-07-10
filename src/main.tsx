import React from 'react';
import ReactDOM from 'react-dom/client';
import  {BrowserRouter , Routes , Route} from 'react-router-dom';
import '@/styles/globals.css';
import { Landing } from '@/components/landing';
import { ArweaveWalletKit } from "@arweave-wallet-kit/react";
import ArConnectStrategy from "@arweave-wallet-kit/arconnect-strategy";
import Selec from '@/components/Selec';
import Setprompt from './components/Setprompt';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ArweaveWalletKit
      config={{
        permissions: [
          "ACCESS_ADDRESS",
          "ACCESS_PUBLIC_KEY",
          "SIGN_TRANSACTION",
          "DISPATCH",
        ],
        ensurePermissions: true,
        strategies: [new ArConnectStrategy()],
      }}
      
    >
     
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Landing/>} />
    <Route path="/select" element={<Selec/>} />
    <Route path="/tune" element={<Setprompt/>} />
    </Routes>
    </BrowserRouter>
    </ArweaveWalletKit>

    
  </React.StrictMode>
);
