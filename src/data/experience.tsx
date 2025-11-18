import { BlurImage } from '@/components/ui/apple-cards-carousel'

export const EXPERIENCE_TIMELINE = [
  {
    title: 'Jul 2022 - Sep 2022',
    content: (
      <div>
        <b className='text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-bold'>
          FPT Software
        </b>
        <p className='text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mt-3'>
          Started as an intern at FPT Software, adapting quickly to real
          development workflows and contributing UI components within a Scrum
          team.
        </p>
      </div>
    )
  },
  {
    title: 'Feb 2023 - Mar 2024',
    content: (
      <div>
        <b className='text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-bold'>
          QKIT Software
        </b>
        <p className='text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-8 mt-3'>
          I then moved to QKIT Software, where I spent over a year converting
          UI/UX designs into clean, pixel-perfect interfaces. I also built
          reusable components and integrated RESTful APIs for HR and operational
          systems — a period that pushed my coding standards and attention to
          detail to a much higher level.
        </p>
        <div className='grid grid-cols-1 gap-4'>
          <BlurImage
            src='/images/qkit/qkit_section_1.jpg'
            alt='startup template'
            width={500}
            height={500}
            className='rounded-lg object-cover h-auto w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]'
          />
        </div>
      </div>
    )
  },
  {
    title: 'Mar 2024 - Present',
    content: (
      <div>
        <b className='text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-bold'>
          Freelance Developer
        </b>
        <p className='text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-8 mt-3'>
          More recently, I’ve been working as a freelance developer, building
          responsive and high-performance websites with React and Next.js.
          Freelancing has helped me grow not only technically but also in
          understanding product thinking and the needs of different clients.
        </p>

        <ul className='list-disc list-inside'>
          <li>
            Constructed pixel-accurate UIs from Figma designs and implemented
            business logic with consistency
          </li>
          <li>
            Worked with RESTful APIs to improve application performance and
            overall responsiveness
          </li>
          <li>
            Contributed to a reusable component system, helping streamline and
            standardize the front-end architecture
          </li>
          <li>
            Enhancing a commercial-grade drone image-processing application
            using React and Three.js
          </li>
        </ul>
      </div>
    )
  }
]
