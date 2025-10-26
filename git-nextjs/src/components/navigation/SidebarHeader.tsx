/**
 * Sidebar Header Component
 * Follows SOLID principles and accessibility standards
 */

import { useTranslation } from '@/hooks/useTranslation'
import { getFontAwesomeIcon } from '@/utils/fontawesome-mapping'
import { PanelLeft, PanelLeftClose } from 'lucide-react'
import { MobileMenuButton } from './MobileMenuButton'

interface SidebarHeaderProps {
	isOpen: boolean
	onToggle: () => void
	className?: string
	isCollapsed?: boolean
	onToggleCollapse?: () => void
}

/**
 * Accessible sidebar header with proper branding and controls
 * Follows WCAG 2.1 AA standards
 */
export function SidebarHeader({
	isOpen,
	onToggle,
	className,
	isCollapsed = false,
	onToggleCollapse,
}: SidebarHeaderProps) {
	const { t } = useTranslation(['common'])

	return (
		<div
			className={`flex items-center justify-between p-6 border-b border-border ${className}`}
		>
			{/* Brand Section */}
			<div
				className={`flex items-center space-x-3 transition-all duration-300 ${
					isCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'
				}`}
			>
				<div
					className="flex items-center justify-center w-8 h-8 text-purple-500 rounded-lg"
					aria-hidden="true"
				>
					{getFontAwesomeIcon('GithubIcon', 'w-6 h-6')}
				</div>
				<div>
					<h1 className="text-xl font-bold text-foreground">
						{t('common:app_brand_name')}
					</h1>
					{/* <p className="text-xs text-muted-foreground">
						{t('common:app_brand_tagline')}
					</p> */}
				</div>
			</div>

			{/* Controls Section */}
			<div className="flex items-center space-x-2">
				{/* Desktop Toggle Button */}
				{onToggleCollapse && (
					<button
						onClick={onToggleCollapse}
						className="hidden md:flex items-center justify-center w-8 h-8 rounded-md hover:bg-accent transition-colors duration-200"
						aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
						title={`${isCollapsed ? 'Expand' : 'Collapse'} sidebar (⌘B)`}
					>
						{isCollapsed ? (
							<PanelLeft className="w-4 h-4" />
						) : (
							<PanelLeftClose className="w-4 h-4" />
						)}
					</button>
				)}

				{/* Mobile Menu Button */}
				<MobileMenuButton
					isOpen={isOpen}
					onToggle={onToggle}
					className="p-1 transition-colors duration-300 rounded-md md:hidden text-foreground hover:text-primary hover:bg-accent"
				/>
			</div>
		</div>
	)
}
