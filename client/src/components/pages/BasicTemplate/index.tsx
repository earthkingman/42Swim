import React from 'react'
import { Container, ContentWrapper, Footer, Header } from './style'

interface Props {
  header: React.ReactNode
  content: React.ReactNode
  footer: React.ReactNode
}

const BasicTemplate = ({ header, content, footer, ...props }: Props) => {
  return (
    <>
      <Container {...props}>
        <Header>{header}</Header>
        <ContentWrapper>{content}</ContentWrapper>
      </Container>
      <Footer>{footer}</Footer>
    </>
  )
}

export default BasicTemplate
