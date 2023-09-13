import { VStack } from '@chakra-ui/react'

import { ContactForm } from '../components/ContactForm'
import { Header } from '../components/Header'

export function ContactPage() {
  return (
    <VStack alignItems="flex-start" gap="24px">
      <Header title="Contact us" />
      <ContactForm />
    </VStack>
  )
}
