import { cn } from '@/lib/utils'

export default function App() {
  const red = true
  return (
    <h1
      className={cn('text-3xl font-bold  underline', 'text-violet-500', {
        'bg-red-700': red,
      })}
    >
      Hello world!
    </h1>
  )
}
