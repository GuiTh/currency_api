import React, { createContext, useState } from 'react'


export const CurrencyContext = createContext();

const CurrencyProvider = ({children}) => {

    const [fromCurrency, setFromCurrency] = useState("🇦🇸 USD - American Samoa")
    const [toCurrency, setToCurrency] = useState("🇧🇷 BRL - Brazil")
    const [firstAmount, setFirstAmount] = useState(0)
    const value = {
        fromCurrency,
        setFromCurrency,
        toCurrency, 
        setToCurrency,
        firstAmount,
        setFirstAmount
    }

  return (
    <CurrencyContext.Provider value={value}>
        {children}
    </CurrencyContext.Provider>
    
  )
}

export default CurrencyProvider