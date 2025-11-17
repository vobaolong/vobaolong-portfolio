import { FullScreen } from '@/components/full-screen'
import { ExperienceTimeline } from './containers/experience-timeline'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Experience | Bao Long Dev',
  description:
    'Explore the professional journey of Bao Long Dev - frontend developer with experience in modern JavaScript frameworks.',
  openGraph: {
    title: 'Experience | Bao Long Dev',
    description:
      'Frontend Developer with hands-on experience in React, Next.js, and modern UI/UX design.',
    url: 'https://',
    siteName: 'Bao Long Dev'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Experience | Bao Long Dev',
    description:
      "Check out Bao Long Dev's past work and achievements in frontend development."
  },
  alternates: {
    canonical: 'https://'
  }
}

export default function Page() {
  return (
    <div>
      <FullScreen>
        <ExperienceTimeline />
      </FullScreen>
    </div>
  )
}
