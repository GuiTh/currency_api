import { Grid, Button } from "@mui/material";
import { CompareArrows } from "@mui/icons-material";
import { useContext } from "react";
import { CurrencyContext } from "../context/CurrencyContext";

export default function SwitchCurrency(){
    const {
        fromCurrency,
        setFromCurrency,
        toCurrency,
        setToCurrency
      } = useContext(CurrencyContext)

    const handleSwitch = () =>{
        setFromCurrency(toCurrency)
        setToCurrency(fromCurrency)
    }
    return(
    <Grid item xs={12} md="auto" >
        <Button onClick={handleSwitch} sx={{
            borderRadius: 1,
            height: '100%'
        }}>
            <CompareArrows sx={{fontSize: 30}} />
        </Button>
    </Grid>
    )
}