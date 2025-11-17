import { Metadata } from 'next'
import { ComingSoonPage } from '@/components/layout/coming-soon'

export const metadata: Metadata = {
  title: 'About | Bao Long Dev',
  description:
    'Learn more about Bao Long Dev - Frontend Developer, JavaScript enthusiast, and tech explorer.',
  keywords: [
    'Bao Long Dev',
    'About Bao Long',
    'Frontend Developer',
    'JavaScript',
    'Next.js',
    'Vietnam Developer'
  ],
  openGraph: {
    title: 'About | Bao Long Dev',
    description:
      'Discover the story and journey of Bao Long Dev in the world of web development.',
    url: 'https://',
    siteName: 'Bao Long Dev',
    type: 'website',
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | Bao Long Dev',
    description:
      'Learn more about Bao Long Dev - Frontend Developer and tech enthusiast.'
  },
  alternates: {
    canonical: 'https://'
  }
}

export default function Page() {
  return <ComingSoonPage pageName='About' />
}
