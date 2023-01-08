import {useState} from 'react'
import { Footer, Loader, Navbar, Services, Transactions, Welcome } from './components'


export default function App() {
  return (
    <div className= "min-h-screen">
      <div className="p-1 bg-gradient-to-r from-purple-800 via-purple-900 to-blue-900">
        <Navbar></Navbar>
        <Welcome></Welcome>
      </div>
      <Services></Services>
      <Transactions></Transactions>
      <Footer></Footer>
      <Loader></Loader>
    </div>
    
  )
}




