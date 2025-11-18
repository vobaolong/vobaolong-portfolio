'use client'

import { useEffect, useState } from 'react'
import { AnimatedSpan, Terminal, TypingAnimation } from '../magicui/terminal'
import { HoverBorderGradient } from '../ui/hover-border-gradient'
import { Logo } from '../svg/logo'
import { useRouter } from 'next/navigation'
import { FullScreen } from '../full-screen'
import Link from 'next/link'

export const ComingSoonPage = ({ pageName }: { pageName?: string }) => {
  const [mounted, setMounted] = useState(false)

  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) return null
  return (
    <FullScreen className='flex-col'>
      <Terminal>
        <TypingAnimation>
          &gt; pnpm dlx vobaolong@portfolio init
        </TypingAnimation>

        <AnimatedSpan delay={1500} className='text-green-500'>
          <span>✔ Design checks.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={2000} className='text-green-500'>
          <span>✔ Setting up portfolio framework. Using Next.js.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={2500} className='text-green-500'>
          <span>✔ Implementing responsive design with Tailwind CSS.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={3000} className='text-green-500'>
          <span>✔ Creating component architecture.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={3500} className='text-green-500'>
          <span>✔ Building project showcase section.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={4000} className='text-green-500'>
          <span>✔ Adding skills and expertise section.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={4500} className='text-green-500'>
          <span>✔ Implementing contact form functionality.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={5000} className='text-green-500'>
          <span>✔ Optimizing images and assets.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={5500} className='text-green-500'>
          <span>✔ Setting up animations and transitions.</span>
        </AnimatedSpan>

        <TypingAnimation delay={6500} className='text-muted-foreground'>
          Success! Portfolio initialization completed.
        </TypingAnimation>

        <TypingAnimation delay={7000} className='text-muted-foreground'>
          Launching at:
        </TypingAnimation>
        <AnimatedSpan delay={7500} className='text-blue-500'>
          <Link
            href='https://vobaolong-portfolio.vercel.app/'
            target='_blank'
            className='text-blue-500 underline'
          >
            https://vobaolong-portfolio.vercel.app/
          </Link>
        </AnimatedSpan>
      </Terminal>

      <div className='flex mt-10 justify-center text-center '>
        <HoverBorderGradient
          containerClassName='rounded-full'
          as='button'
          className='dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 cursor-pointer'
          onClick={() => router.push('/')}
        >
          <Logo className='size-5' />
          <span>Back to home</span>
        </HoverBorderGradient>
      </div>
    </FullScreen>
  )
}
