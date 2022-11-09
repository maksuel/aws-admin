import { ReactNode } from 'react'
import '@/styles/globals.css'

interface Props {
	children: ReactNode
}

export default function RootLayout({ children }: Props) {
	return (
		<html>
			<head></head>
			<body className="bg-black text-white">{children}</body>
		</html>
	)
}
