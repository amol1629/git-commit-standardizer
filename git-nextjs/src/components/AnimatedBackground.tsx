'use client'

import { useTheme } from 'next-themes'

interface AnimatedBackgroundProps {
	children: React.ReactNode
	className?: string
}

export default function AnimatedBackground({
	children,
	className = '',
}: AnimatedBackgroundProps) {
	const { theme, resolvedTheme } = useTheme()

	// Use resolvedTheme to avoid hydration issues
	const currentTheme = resolvedTheme || theme

	return (
		<div className={`min-h-screen w-full relative ${className}`}>
			{/* Light Theme Background */}
			<div
				className={`absolute inset-0 z-0 ${currentTheme === 'dark' ? 'hidden' : 'block'}`}
				style={{
					backgroundColor: 'hsl(var(--background))',
				}}
			/>

			{/* Dark Theme Background */}
			<div
				className={`absolute inset-0 z-0 ${currentTheme === 'dark' ? 'block' : 'hidden'}`}
				style={{
					background: '#000000',
					backgroundImage: `
						radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.2) 1px, transparent 0),
						radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.18) 1px, transparent 0),
						radial-gradient(circle at 1px 1px, rgba(236, 72, 153, 0.15) 1px, transparent 0)
					`,
					backgroundSize: '20px 20px, 30px 30px, 25px 25px',
					backgroundPosition: '0 0, 10px 10px, 15px 5px',
				}}
			/>

			{/* Content with proper z-index */}
			<div className="relative z-10">{children}</div>
		</div>
	)
}
