import { ReactNode } from 'react'
import AppProvider from '@/context/app'
import '@/styles/globals.css'

interface Props {
	children: ReactNode
}

export default function RootLayout({ children }: Props) {
	return (
		<html>
			<head></head>
			<body className="bg-black text-white">
				<AppProvider>{children}</AppProvider>
			</body>
		</html>
	)
}
