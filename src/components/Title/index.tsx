import { TitleTagST } from './styles'

export type Props = {
  children: string
  fontSize?: number
}

const Title = (props: Props) => (
  <TitleTagST fontSize={props.fontSize}>{props.children}</TitleTagST>
)

export default Title
