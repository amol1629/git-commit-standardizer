/**
 * Sidebar Footer Component
 * User settings icon with name in center with dropdown
 */

import { ProfileDropdown } from '@/components/ProfileDropdown'
import { useAuth } from '@/contexts/AuthContext'
import { getFontAwesomeIcon } from '@/utils/fontawesome-mapping'

interface SidebarFooterProps {
	className?: string
	isCollapsed?: boolean
}

/**
 * Modern sidebar footer with user settings dropdown and name
 * Follows WCAG 2.1 AA standards with proper accessibility
 */
export function SidebarFooter({
	className,
	isCollapsed = false,
}: SidebarFooterProps) {
	const { authState } = useAuth()

	return (
		<div
			className={`border-t border-gray-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm transition-all duration-300 ${className}`}
		>
			{/* User Settings Section */}
			<div className={isCollapsed ? 'p-2' : 'p-4'}>
				<div
					className={`flex items-center gap-3 ${isCollapsed ? 'justify-center' : 'justify-center'}`}
				>
					{/* User Settings Dropdown with Name as Trigger */}
					<ProfileDropdown
						trigger={
							<div
								className={`flex items-center gap-3 transition-all duration-300 cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/20 group ${
									isCollapsed
										? 'w-12 h-12 justify-center rounded-full p-0'
										: 'flex-1 min-w-0 rounded-lg p-2'
								}`}
							>
								{/* User Icon */}
								<div
									className={`flex items-center justify-center flex-shrink-0 shadow-lg bg-gradient-to-br from-blue-500 via-purple-500 to-emerald-500 shadow-blue-500/25 ${
										isCollapsed
											? 'w-10 h-10 rounded-full'
											: 'w-8 h-8 rounded-lg'
									}`}
								>
									{getFontAwesomeIcon(
										'User',
										isCollapsed ? 'w-6 h-6 text-white' : 'w-4 h-4 text-white',
									)}
								</div>

								{/* User Info - only show when not collapsed */}
								{!isCollapsed && (
									<div className="flex-1 min-w-0">
										<p className="text-sm font-medium text-gray-900 truncate transition-colors duration-300 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
											{authState.user?.name || 'User'}
										</p>
										<p className="text-xs text-gray-500 truncate transition-colors duration-300 dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-500">
											{authState.user?.email}
										</p>
									</div>
								)}
							</div>
						}
					/>
				</div>
			</div>
		</div>
	)
}
