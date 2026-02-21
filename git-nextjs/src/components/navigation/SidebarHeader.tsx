/**
 * Sidebar Header Component
 * Follows SOLID principles and accessibility standards
 */

import { useTranslation } from '@/hooks/useTranslation'
import {
	byPrefixAndName,
	getFontAwesomeIcon,
} from '@/utils/fontawesome-mapping'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
			className={`flex items-center px-4 py-4 md:p-6 border-b border-border ${
				isCollapsed ? 'justify-center ' : 'justify-between'
			} ${className}`}
		>
			{/* Brand Section */}
			<div
				className={`flex items-center space-x-3 transition-all duration-300 ${
					isCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'
				}`}
			>
				{/* <div
					className="flex items-center justify-center w-8 h-8 text-purple-500 rounded-lg"
					aria-hidden="true"
				>
					{getFontAwesomeIcon('GithubIcon', 'w-6 h-6')}
				</div> */}
				<div>
					<h1 className="text-xl font-extrabold tracking-tight text-transparent md:text-3xl bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text">
						{t('common:app_brand_name')}
					</h1>
					{/* <p className="text-xs text-muted-foreground">
						{t('common:app_brand_tagline')}
					</p> */}
				</div>
			</div>

			{/* Controls Section */}
			<div
				className={`flex items-center gap-2 md:gap-3 ${
					isCollapsed
						? 'justify-center   md:ml-0'
						: 'md:ml-8'
				}`}
			>
				{/* Desktop Toggle Button */}
				{onToggleCollapse && (
					<button
						onClick={onToggleCollapse}
						className="items-center justify-center hidden w-8 h-8 p-0 transition-all duration-200 border rounded-full md:flex border-border bg-muted/40 text-muted-foreground hover:bg-accent hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
						aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
						title={`${isCollapsed ? 'Expand' : 'Collapse'} sidebar (⌘B)`}
					>

						<span className="flex items-center justify-center w-8 h-8 rounded-full shadow-sm bg-background">
							<FontAwesomeIcon
								icon={
									isCollapsed
										? byPrefixAndName.fas['maximize']
										: byPrefixAndName.fas['minimize']
								}
								className="w-4 h-4"
								style={{ lineHeight: '1' }}
								aria-hidden="true"
							/>
						</span>
					</button>
				)}

				{/* Mobile Collapse Button */}
				{onToggleCollapse && (
					<button
						onClick={onToggleCollapse}
						className="flex items-center justify-center hidden p-0 mx-auto transition-all duration-200 border rounded-full w-11 h-11 md:hidden border-border bg-muted/40 text-muted-foreground hover:bg-accent hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
						aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
						title={`${isCollapsed ? 'Expand' : 'Collapse'} sidebar`}
					>
						<span className="flex items-center justify-center w-8 h-8 rounded-full shadow-sm bg-background">
							<FontAwesomeIcon
								icon={byPrefixAndName.fas['maximize']}
								className="w-4 h-4"
								style={{ lineHeight: '1' }}
								aria-hidden="true"
							/>
						</span>
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
