import React from 'react'

// components
import Header from './components/Header'
import Content from './components/Content';

function App() {

  console.log(Header);

  return (
    <main className='main'>      
      <Header />
      <Content />
    </main>
  )
}

export default App