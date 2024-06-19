import Header from './components/Header'
import Hero from './components/Hero'
import ContentUs from './components/ContactUs'
import Footer from './components/Footer'
import Main from './components/Main'
import { useSelector } from 'react-redux'

/*
{
    "compilerOptions": {
        "checkJs": true,
        "jsx": "react-jsx",
        "baseUrl": "src",
        "resolveJsonModule": true,
        "lib": [
            "es6",
            "dom",
            "es2017"
        ],
    },
    "include": [
        "src"
    ],
    "exclude": [
        "node_modules",
        "build"
    ]
}
*/

function App() {
  const dark = useSelector((state) => state.dark.isDark)

  return (
    <div className={`${dark && 'dark'}`}>
      <div className='bg-zinc-300  dark:bg-black text-zinc-900 dark:text-gray-100'>
        <Header />
        <Hero />
        <Main />
        <ContentUs />
        <Footer />
      </div>
    </div>
  )
}

export default App
