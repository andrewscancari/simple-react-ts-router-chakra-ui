import { Input, VStack } from '@chakra-ui/react'

export function ContactForm() {
  return (
    <VStack>
      <Input inputMode="text" placeholder="First name" type="text" />
      <Input inputMode="email" placeholder="E-Mail" type="email" />
      <Input inputMode="text" placeholder="Message" type="text" />

      <Input marginTop="16px" type="submit" value="Submit" />
    </VStack>
  )
}
