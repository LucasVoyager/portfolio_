import { P } from './styles'

export type Props = {
  children: string
  typep?: 'main' | 'secondary'
}

const Paragraph = ({ children, typep = 'main' }: Props) => (
  <P typep={typep}>{children}</P>
)

export default Paragraph
