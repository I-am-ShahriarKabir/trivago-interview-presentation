import dynamic from 'next/dynamic'

const Presentation = dynamic(() => import('@/components/trivago-interview-presentation'), { ssr: false })

export default function Home() {
  return (
    <main>
      <Presentation />
    </main>
  )
}