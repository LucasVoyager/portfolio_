import styled from 'styled-components'
import { P } from '../../components/Paragraph/styles'

export const Describe = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`
export const ButtonTheme = styled.button`
  font-size: 10px;
  border-radius: 12px;
  padding: 8px;
  color: ${(props) => props.theme.backgroundColor};
  font-weight: bold;
  background-color: ${(props) => props.theme.mainColor};
  cursor: pointer;
`
export const SideBarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    margin-bottom: 48px;
    text-align: center;
  }
`

export const LinksSocialMedia = styled.div`
  display: flex;
  margin-top: 16px;

  a {
    text-decoration: none;
    color: inherit;
    margin-right: 2px;
  }

  @media (max-width: 768px) {
    margin-left: 28px;
    display: inline-block;
  }
`
