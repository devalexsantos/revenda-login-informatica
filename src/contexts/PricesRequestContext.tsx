import React, { createContext, useState } from 'react'

interface PriceRequestContextTypes {
  openDialog: boolean
  setOpenDialog: (state: boolean) => void
}

export const PriceRequestContext = createContext({} as PriceRequestContextTypes)

interface PriceRequestProviderProps {
  children: React.ReactNode
}

export function PriceRequestProvider({ children }: PriceRequestProviderProps) {
  const [openDialog, setOpenDialog] = useState(false)

  return (
    <PriceRequestContext.Provider value={{ openDialog, setOpenDialog }}>
      {children}
    </PriceRequestContext.Provider>
  )
}
