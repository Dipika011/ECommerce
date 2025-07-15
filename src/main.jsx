import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './Context/AuthContext.jsx'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
createRoot(document.getElementById('root')).render(
 <AuthProvider>
  <App/>
 </AuthProvider>
)
