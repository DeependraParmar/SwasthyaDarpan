import { Suspense, lazy } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./Pages/Layout/Header"
import Loading from "./Components/Loading"
import Footer from "./Pages/Layout/Footer";
import { Toaster } from 'react-hot-toast';

const Home = lazy(() => import('./Pages/Home/Home'));
const Contact = lazy(() => import('./Pages/Contact/Contact'));
const Public = lazy(() => import('./Pages/Reports/Public'));
const NotFound = lazy(() => import('./Components/NotFound'));
const About = lazy(() => import('./Pages/About/About'));
const Authorised = lazy(() => import('./Pages/Reports/Authorised'));

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
            <Route path="/about" element={<About />} />

            <Route path="/user/:id" element={<Authorised />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Suspense>

        <Toaster toastOptions={
          {
            duration: 5000,
            style: {
              background: '#333',
              color: '#fff',
            },
            position: 'top-right',
          }
        } />
      </Router>
    </>
  )
}

export default App
