import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Seeallblog } from './component/Seeallblog.tsx'
import { SignUp } from './auth/SignUp.tsx'
import { SignIn } from './auth/SignIn.tsx'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/SeeAll' element={<Seeallblog></Seeallblog>}></Route>
        <Route path='/SignUp' element={<SignUp></SignUp>}></Route>
        <Route path='/SignIn' element={<SignIn></SignIn>}></Route>
      </Routes> 
    </BrowserRouter>
  </React.StrictMode>,
)
