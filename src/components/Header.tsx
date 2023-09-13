import { Heading } from '@chakra-ui/react'

interface Props {
  title: string
}

export function Header({ title }: Props) {
  return <Heading as="h1">{title}</Heading>
}
