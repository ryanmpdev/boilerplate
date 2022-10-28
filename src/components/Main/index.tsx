import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado"
    />
    <S.Title>React avançado</S.Title>
    <S.Descripton>TypeScript, ReactJS, NextJS e styled components</S.Descripton>
    <S.Illustration src="/img/hero-illustration.svg" />
  </S.Wrapper>
)

export default Main
