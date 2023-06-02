import { Grid, Button } from "@mui/material";
import { CompareArrows } from "@mui/icons-material";
export default function SwitchCurrency(){
    return(
    <Grid item xs={12} md={3} >
        <Button sx={{
            borderRadius: 1,
            height: '100%'
        }}>
            <CompareArrows sx={{fontSize: 30}} />
        </Button>
    </Grid>
    )
}