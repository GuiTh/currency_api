import Api from "./hooks/Api"
function App() {
  
  return (
    <div className="flex flex-row justify-center m-4">
      <div className="grid grid-cols-2">
            <Api moeda="USD-BRL" titulo='Dolar:' />
            <Api moeda="EUR-BRL" titulo='Euro:'/>
      </div>
      
    </div>
    )
}

export default App
