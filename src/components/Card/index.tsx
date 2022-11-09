import Link from 'next/link'

interface Props {
	href: string
	title: string
	description: string
}

export default function Card({ href, title, description }: Props) {
	return (
		<Link
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="p-6 text-left border-2 border-gray-100 rounded-xl hover:text-blue-600 hover:border-blue-600"
		>
			<h2 className="mb-4 text-2xl">{title} &rarr;</h2>
			<p className="text-xl">{description}</p>
		</Link>
	)
}
