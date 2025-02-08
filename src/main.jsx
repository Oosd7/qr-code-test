import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Layout} from './Layout';
import { BrowserRouter} from "react-router-dom";
import { Navigation } from './Components/Navigation/Navigation';
import { QrCodeGenerator } from './Components/Generate/QrCodeGenerator';
import { QrCodeScanner} from "./Components/Scan/QrCodeScanner";

// console.log(Layout);
createRoot(document.getElementById('root')).render(
  <BrowserRouter> 
  <Layout/>
  </BrowserRouter>
)
