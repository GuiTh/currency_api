import Api from "./hooks/Api"
import Header from "./components/header"
import InputAmount from "./components/inputAmount"
import SelectCountry from "./components/SelectCountry"
import SwitchCurrency from "./components/SwitchCurrency"
import { Container, Grid, Button, Typography } from "@mui/material"

function App() {

  const boxStyles = {
    background: '#fdfdfd',
    textAlign: 'center',
    marginTop: '10rem',
    color: '#222',
    minHeight: '20rem',
    borderRadius: 2,
    padding: '4rem 2rem',
    boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
    position: 'relative'
  }
  
  return (
    <div>
      <Header/>
      <div className="grid grid-cols-2">
            <Api moeda="USD-BRL" titulo='Dolar:' />
            <Api moeda="EUR-BRL" titulo='Euro:'/>
      </div>
      <Container maxWidth="md" sx={boxStyles}>
        <Typography variant="h5" sx={{marginBottom: "2rem"}}>Stay Ahead with Accurate Conversions</Typography>
        <Grid container spacing={2}>
          <InputAmount />
          <SelectCountry />
          <SwitchCurrency />
          <SelectCountry />
        </Grid>
      </Container>  
    </div>
    )
}

export default App
