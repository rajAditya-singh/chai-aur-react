// import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx's


// function MyApp() {

//   return (
//     <div>Custom App /asdasd/</div>
//   )
// }

// const ReactElement = {
//   type:'a',
//   props:{
//       href: 'http://google.com',
//       target : '_blank'
//   },
//   children:'Click me to visit google'
// }

// const anotherElement = (
//   <a href='http://google.com' target='_blanks'>visit Google</a>
// )

const anotherUser = " adi"

const ReactElement = React.createElement(
    'a',
    {href:'http://google.com',
    target: '_blank'
    },
    'View Google',
    anotherUser
)

createRoot(document.getElementById('root')).render(

    // <MyApp />
    // MyApp
    ReactElement
    // anotherElement
    // <App />

)
