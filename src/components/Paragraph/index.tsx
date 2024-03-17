import { P } from './styles'

export type Props = {
  children: string
  typep?: 'main' | 'secondary'
  fontSize?: number
}

const Paragraph = ({ children, typep = 'main', fontSize }: Props) => (
  <P fontSize={fontSize} typep={typep}>
    {children}
  </P>
)

export default Paragraph
