'use client'

import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div className="flex items-end gap-4">
        <Image
          src="/profile.JPG"
          alt="Yannan Cai"
          width={200}
          height={200}
          className="rounded-lg"
        />

        <div>
          <Link 
          href="https://www.linkedin.com/in/yannan-cai-5b473a297/" 
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-black dark:text-white">
            Yannan Cai
          </Link>

          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-600 dark:text-zinc-500"
            delay={0.5}
          >
            Software Engineer
          </TextEffect>
        </div>
      </div>
    </header>
  )
}