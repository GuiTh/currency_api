import Api from "./hooks/Api"
import Header from "./components/header"
import InputAmount from "./components/inputAmount"
import SelectCountry from "./components/SelectCountry"
import SwitchCurrency from "./components/SwitchCurrency"
import { Container, Grid, Button, Typography } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import { CurrencyContext } from "./context/CurrencyContext"
import axios from "axios"

function App() {

  const {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    firstAmount,
  } = useContext(CurrencyContext)

  const [resultCurrency, setResultCurrency] = useState(0)
  const codeFromCurrency = fromCurrency.split(' ')[1]
  const codeToCurrency = toCurrency.split(' ')[1]

  useEffect(() =>{
    if(firstAmount){
      axios("https://api.freecurrencyapi.com/v1/latest", {
        params:{
          apiKey:'wbsq9SwSt5X5hGbNUzfJ4lxADJxbA4HCXlw0z6tv',
          base_currency: codeFromCurrency,
          currencies: codeToCurrency
        }
      }).then(res => setResultCurrency(res.data.data[codeToCurrency]))
      .catch(error => console.log(error))
    }
  }, [firstAmount])

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
          <SelectCountry value={fromCurrency} setValue={setFromCurrency} label="From" />
          <SwitchCurrency />
          <SelectCountry value={toCurrency} setValue={setToCurrency} label="To" />
        </Grid>
      </Container>  
    </div>
    )
}

export default App
