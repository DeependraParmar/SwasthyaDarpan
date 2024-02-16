import { Suspense, lazy } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./Pages/Layout/Header"
import Loading from "./Components/Loading"
import Footer from "./Pages/Layout/Footer";

const Home = lazy(() => import('./Pages/Home/Home'));
const Contact = lazy(() => import('./Pages/Contact/Contact'));
const Public = lazy(() => import('./Pages/Reports/Public'));
const NotFound = lazy(() => import('./Components/NotFound'));

function App() {

  return (
    <>
      <Router>
        <Suspense fallback={<Loading />}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/public/:name/:heartrate/:spo2/:glucose/:temperature" element={<Public />}  />

            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Suspense>
      </Router>
    </>
  )
}

export default App
