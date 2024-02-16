import { Suspense, lazy } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./Pages/Layout/Header"
import Loading from "./Components/Loading"

const Home = lazy(() => import('./Pages/Home/Home'));
const Contact = lazy(() => import('./Pages/Contact/Contact'));

function App() {

  return (
    <>
      <Router>
        <Suspense fallback={<Loading />}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App
