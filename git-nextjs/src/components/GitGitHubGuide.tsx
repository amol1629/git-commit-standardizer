'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { GIT_COMMANDS } from '@/constants/git-commands'
import { GITHUB_FEATURES } from '@/constants/github-features'
import { WORKFLOWS } from '@/constants/workflows'
import { useTranslation } from '@/hooks/useTranslation'
// import { getFontAwesomeIcon } from '@/utils/fontawesome-mapping'
import { BestPracticesSection } from './git-guide/BestPracticesSection'
import { GitCommandsSection } from './git-guide/GitCommandsSection'
import { GitHubFeaturesSection } from './git-guide/GitHubFeaturesSection'
import { WorkflowsSection } from './git-guide/WorkflowsSection'

export function GitGitHubGuide() {
	const { t } = useTranslation(['common', 'git-guide'])

	return (
		<div className="max-w-6xl mx-auto space-y-8">
			<div className="space-y-4 text-center">
				<div className="flex justify-center mb-4">
					{/* <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl">
						{getFontAwesomeIcon('Github', 'w-8 h-8 text-white')}
					</div> */}
				</div>
				{/* <h1 className="text-5xl font-bold text-foreground">
					{t('git-guide:hero_title')}
				</h1>
				<p className="max-w-3xl mx-auto text-xl text-muted-foreground">
					{t('git-guide:hero_description')}
				</p> */}
			</div>

			<Tabs defaultValue="git-basics" className="w-full">
				<TabsList className="grid w-full grid-cols-4 rounded-full">
					<TabsTrigger
						className="transition-colors rounded-full hover:bg-accent hover:text-accent-foreground"
						value="git-basics"
					>
						{t('git-guide:tabs_git_basics')}
					</TabsTrigger>
					<TabsTrigger
						className="transition-colors rounded-full hover:bg-accent hover:text-accent-foreground"
						value="github-features"
					>
						{t('git-guide:tabs_github_features')}
					</TabsTrigger>
					<TabsTrigger
						className="transition-colors rounded-full hover:bg-accent hover:text-accent-foreground"
						value="workflows"
					>
						{t('git-guide:tabs_workflows')}
					</TabsTrigger>
					<TabsTrigger
						className="transition-colors rounded-full hover:bg-accent hover:text-accent-foreground"
						value="best-practices"
					>
						{t('git-guide:tabs_best_practices')}
					</TabsTrigger>
				</TabsList>

				<TabsContent value="git-basics" className="space-y-6">
					<GitCommandsSection commands={GIT_COMMANDS} />
				</TabsContent>

				<TabsContent value="github-features" className="space-y-6">
					<GitHubFeaturesSection features={GITHUB_FEATURES} />
				</TabsContent>

				<TabsContent value="workflows" className="space-y-6">
					<WorkflowsSection workflows={WORKFLOWS} />
				</TabsContent>

				<TabsContent value="best-practices" className="space-y-6">
					<BestPracticesSection />
				</TabsContent>
			</Tabs>
		</div>
	)
}
