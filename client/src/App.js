import EkycPage from "./components/Ekyc";
import Header from "./components/Header";
import LifiPage from "./components/LifiWidget";
import Swap from "./components/Swap";
import AuthPage from "./components/AuthPage";
// import Tokens from "./components/Tokens";
import { Routes, Route } from "react-router-dom";
import { useConnect, useAccount, MetaMaskConnector } from "wagmi";
// import { MetaMaskConnector } from "wagmi/connectors/metaMask";

function App() {
  const { address, isConnected } = useAccount();
  // const { connect } = useConnect({
  //   connector: new MetaMaskConnector(),
  // });

  
  return (
  
          <div className="App">
            <Header
              isConnected={isConnected}
              address={address}
            />
            <div className="mainWindow">
              <Routes>
                <Route
                  path="/"
                  element={<Swap isConnected={isConnected} address={address} />}
                />
                {/* <Route path="/tokens" element={<Tokens />} />  */}
                <Route path="/ekyc" element={<EkycPage />} />
                <Route path="/exchanges/*" element={<LifiPage />} />
                {/* <Route path="/auth" element={<AuthPage />} /> */}
                <Route path="/auth" element={<AuthPage />} />
              </Routes>
            </div>
          </div>

  );
}

export default App;
