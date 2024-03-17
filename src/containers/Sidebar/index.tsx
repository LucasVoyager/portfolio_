import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'
import { ButtonTheme, Describe, SideBarContainer } from './styles'

const Sidebar = () => (
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
      <ButtonTheme>Trocar tema</ButtonTheme>
    </SideBarContainer>
  </aside>
)

export default Sidebar
