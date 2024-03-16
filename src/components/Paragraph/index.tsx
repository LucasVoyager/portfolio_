import { P } from './styles'

export type Props = {
  children: string
  typeP?: 'main' | 'secondary'
}

const Paragraph = ({ children, typeP = 'main' }: Props) => (
  <P typeP={typeP}>{children}</P>
)

export default Paragraph
