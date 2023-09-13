import { HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export function NavMenu() {
  return (
    <HStack gap="16px">
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>
    </HStack>
  )
}
