'use client'

import { createContext, ReactNode, useContext } from 'react'

interface Props {
	children: ReactNode
}

interface Value {
	source: string
}

const defaultValue: Value = {
	source: ''
}

export const AppContext = createContext<Value>(defaultValue)

export default function AppProvider({ children }: Props) {
	const source = 'src/app/page.tsx'
	return (
		<AppContext.Provider value={{ source }}>{children}</AppContext.Provider>
	)
}

export const useAppContext = () => useContext(AppContext)
