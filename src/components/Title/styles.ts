import styled from 'styled-components'
import { Props } from '.'

export const TitleTagST = styled.h3<Props>`
  color: #282a35;
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: bold;
`
