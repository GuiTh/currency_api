import Api from "./hooks/Api"
import Header from "./components/header"
import {Button, Container, Typography} from '@mui/material'
function App() {
  
  return (
    <div>
      <Header/>
      <div className="grid grid-cols-2">
            <Api moeda="USD-BRL" titulo='Dolar:' />
            <Api moeda="EUR-BRL" titulo='Euro:'/>
      </div>
      <Container maxWidth="md" sx={{background: '#fdfdfd'}}>
        <Typography variant="h5" sx={{marginTop: '2rem'}}>Conversões Monetarias</Typography>

      </Container>
    </div>
    )
}

export default App
