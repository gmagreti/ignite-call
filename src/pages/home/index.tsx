import Image from 'next/image'
import { Heading, Text } from '@ignite-ui/react'

import { Container, Hero, Preview } from './styles'

import previewImage from '~/assets/app-preview.png'

import { ClaimUsernameForm } from './components/ClaimUsernameForm'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ignite Call</title>
      </Head>

      <Container>
        <Hero>
          <Heading as="h1" size="4xl">
            Agendamento descomplicado
          </Heading>
          <Text size="xl">
            Conecte seu calendário e permita que as pessoas marquem agendamentos
            no seu tempo livre.
          </Text>

          <ClaimUsernameForm />
        </Hero>

        <Preview>
          <Image
            src={previewImage}
            height={400}
            quality={100}
            priority
            alt="Calendário simbolizando aplicação em funcionamento"
          />
        </Preview>
      </Container>
    </>
  )
}
