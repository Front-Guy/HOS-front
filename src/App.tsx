import Header from "./components/Header.tsx";
import Content from "./components/Content.tsx";
import {useState} from "react";

function App() {

    const [reFetchToggle, setReFetchToggle] = useState<boolean>(true)

  return (
    <main>
        <Header setReFetchToggle={setReFetchToggle}/>
        <Content reFetchToggle={reFetchToggle} setReFetchToggle={setReFetchToggle}/>
    </main>
  )
}

export default App
