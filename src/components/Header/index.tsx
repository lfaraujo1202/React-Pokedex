import { Container, Content } from './styles'
import PokemonLogo from '../../assets/Pokemon-Logo.png'

export function Header () {

    return (
        <Container>
            <Content>
            <div className="logo">
            <img src={PokemonLogo} alt="Icone de react"/>
            </div>
            <div className="containerMenu">
                <ul className="nav-menu">
                </ul>
            </div>

            </Content>
        </Container>
    )
}