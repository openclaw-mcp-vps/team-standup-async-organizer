import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'StandupSync — Async Daily Standups with AI Summaries',
  description: 'Team members submit standup updates in Slack or Discord. AI generates summaries and flags blockers for managers automatically.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="4aef57f9-61b8-4c42-b41b-dfa9d90adf29"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
