import { SeparatorContainer } from './style'

interface SeparatorProps {
  title: string
}

export function Separator({ title }: SeparatorProps) {
  return (
    <SeparatorContainer>
      <div />
      <h2>{title}</h2>
      <div />
    </SeparatorContainer>
  )
}
