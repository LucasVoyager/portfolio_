import 'bootstrap-icons/font/bootstrap-icons.css'

import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'
import {
  ButtonTheme,
  Describe,
  LinksSocialMedia,
  SideBarContainer
} from './styles'

type Props = {
  changeTheme: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SideBarContainer>
      <Avatar />
      <Title fontSize={20}>Lucas Barros</Title>
      <Paragraph typep="secondary" fontSize={16}>
        LucasVoyager
      </Paragraph>
      <Describe typep="main" fontSize={12}>
        Dev Full-Stack Python
      </Describe>
      <ButtonTheme onClick={props.changeTheme}>Trocar tema</ButtonTheme>
      <LinksSocialMedia>
        <a href="https://www.linkedin.com/in/lucasbarrosds">
          <i className="bi bi-linkedin"></i>
        </a>
        <a href="https://github.com/LucasVoyager">
          <i className="bi bi-github"></i>
        </a>
        <a href="mailto:fallenagamesytb@gmail.com">
          <i className="bi bi-mailbox"></i>
        </a>
      </LinksSocialMedia>
    </SideBarContainer>
  </aside>
)

export default Sidebar
