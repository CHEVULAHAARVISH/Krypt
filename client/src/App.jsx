import {Footer,Loader,Navbar,Services,Transactions,Welcome} from "./components/index"
const App=()=> {

  return (
    <>
      <div className="min-h-screen"> 
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
        
      </div>
      <Services />
      <Transactions />
      <Footer />
      </div>
    </>
  )
}

export default App
