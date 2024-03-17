import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GitHubSection } from './styles'

const About = () => (
  <section>
    <Title fontSize={16}>Sobre mim:</Title>
    <Paragraph>
      Olá, me chamo Lucas tenho 22 anos, atualmente estou cursando engenharia da
      computação pela Univesp, recentemente entrei no curso de Dev Full Stack
      Python na EBAC, esta sendo de grande complemento para minha área e
      desenvolvimento profissional. Amo basquete, lugares, a noite, o frio e
      filosofia.
    </Paragraph>
    <GitHubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=LucasVoyager&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=LucasVoyager&layout=compact&langs_count=7&theme=dracula" />
    </GitHubSection>
  </section>
)

export default About
