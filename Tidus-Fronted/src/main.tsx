import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Uploading from './pages/UploadingPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Uploading/>
  </StrictMode>
)
