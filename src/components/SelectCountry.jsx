import { Autocomplete, Grid, TextField } from "@mui/material";
import UseAxios from "../hooks/useAxios";

export default function SelectCountry(){

    const [data] = UseAxios("https://restcountries.com/v3.1/all")
    const dataFilter = data.filter(item => "currencies" in item)
    const dataCountries = dataFilter.map(item =>{
        return `${item.flag} ${Object.keys(item.currencies)[0]} - ${item.name.common}`
    })
    console.log(dataCountries)
    return (
        <Grid item xs={12}>
            <Autocomplete 
            value='option1'
            options={dataCountries}
            renderInput={(params) => <TextField {...params} label="from"/>}
            />
        </Grid>
    )
}