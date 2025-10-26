'use client'

import { LoadingSpinner } from '@/components/LoadingSpinner'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
	const { authState } = useAuth()
	const router = useRouter()

	useEffect(() => {
		// Only redirect after authentication check is complete
		if (!authState.isLoading) {
			console.log('Auth state:', {
				isAuthenticated: authState.isAuthenticated,
				user: authState.user,
			})

			if (authState.isAuthenticated) {
				console.log('User is authenticated, redirecting to /home')
				router.push('/home')
			} else {
				console.log('User is not authenticated, redirecting to /auth/login')
				// Force redirect to login if not authenticated
				router.push('/auth/login')
			}
		}
	}, [authState.isLoading, authState.isAuthenticated, authState.user, router])

	// Show loading while checking authentication
	if (authState.isLoading) {
		return (
			<div className="flex items-center justify-center min-h-screen">
				<LoadingSpinner
					size="lg"
					variant="default"
					text="Checking authentication..."
				/>
			</div>
		)
	}

	// Show loading while redirecting
	return (
		<div className="flex items-center justify-center min-h-screen">
			<LoadingSpinner size="lg" variant="default" text="Redirecting..." />
		</div>
	)
}
