import Link, { LinkProps } from 'next/link'
import clsx, { ClassValue } from 'clsx'

interface Props extends LinkProps {
	className: ClassValue
	children: any
}

export default function A({ className, ...props }: Props) {
	return (
		<Link
			{...props}
			className={clsx(
				'hover:underline hover:text-blue-400 font-bold',
				className
			)}
		/>
	)
}
