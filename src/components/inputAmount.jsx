import {Button, Container, Grid, Typography, TextField, InputAdornment} from '@mui/material'

export default function InputAmount(){
    return(
          <Grid item xs={12} md> 
            <TextField label="Amount" fullWidth InputProps={{
              type: 'number',
              startAdornment:<InputAdornment position='start'>$</InputAdornment>
              }}/>

            
          </Grid>

      )
}