import React from 'react'
import Header from '../components/common/Header/Header'
import { Outlet, ScrollRestoration, useMatches } from 'react-router'
import Footer from '../components/common/Footer/Footer'

function RootLayout() {
  const matches=useMatches()
const hideLayout=matches.some(match=>match.handle?.hideLayout)
  console.log(hideLayout);
  
  return (
   <>
   {!hideLayout && <Header/>}
   <ScrollRestoration/>
   <main style={{minHeight:'100vh'}}>
   <Outlet/>
   </main>
   {!hideLayout && <Footer/>}
   </>
  )
}

export default RootLayout