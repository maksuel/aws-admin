'use client'

import Head from 'next/head'
import Image from 'next/image'
import Card from '@/components/Card'
import { useAppContext } from '@/context/app'

export default function Home() {
	const { source } = useAppContext()
	return (
		<div className="max-w-3xl px-4 mx-auto">
			<Head>
				<title>Next App por Maksuel</title>
				<meta
					name="description"
					content="Base para projetos com NextJS & TailwindCSS"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="min-h-screen py-16 flex flex-col justify-center items-center">
				<h1 className="text-6xl">
					Bem-vindo ao{' '}
					<a
						className="text-blue-600 hover:underline focus:underline active:underline"
						href="https://nextjs.org"
					>
						Next.js 13!
					</a>
				</h1>

				<p className="my-16 text-2xl">
					Comece editando{' '}
					<code className="bg-gray-900 rounded p-3 text-lg">{source}</code>
				</p>

				<div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
					<Card
						href="https://nextjs.org/docs"
						title="Documentação"
						description="Encontre informações detalhadas sobre os recursos e a API do Next.js."
					/>

					<Card
						href="https://nextjs.org/learn"
						title="Aprenda"
						description="Aprenda sobre Next.js em um curso interativo com questionários!"
					/>

					<Card
						href="https://github.com/vercel/next.js/tree/canary/examples"
						title="Exemplos"
						description="Descubra e implante projetos Next.js de exemplo padrão."
					/>

					<Card
						href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
						title="Deploy"
						description="Implante instantaneamente seu site Next.js em uma URL pública com o Vercel."
					/>
				</div>
			</main>

			<footer className="flex">
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{' '}
					<span className="">
						<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
					</span>
				</a>
			</footer>
		</div>
	)
}
