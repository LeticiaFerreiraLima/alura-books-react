import Logo from '../logo/index';
import IconesHeader from '../IconesHeader/index';
import OpcoesHeader from '../OpcoesHeader/index';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-around;

`
function Header() {
    return (
        <HeaderContainer>
            <Logo/>
            <OpcoesHeader/>
            <IconesHeader/>
        </HeaderContainer>
    )
}

export default Header;