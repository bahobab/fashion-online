import React from 'react';
// import {Link} from 'react-router-dom';

import {createStructuredSelector} from 'reselect';

import {connect} from 'react-redux';

import CartDropdown from '../cart-dropdown/CartDropdown.component';
import CartIcon from '../cart-icon/CartIcon.component';

import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils.js';

import {selectCartHidden} from '../../redux/cart/cart.selector';
import {selectCurrentUser} from '../../redux/user/user.select'

// import './Header.styles.scss';
import {HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink} from './Header.styles';

const Header = ({currentUser, hidden}) => {
    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className="logo"/>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop">SHOP</OptionLink>
                <OptionLink to="/contact">CONTACT</OptionLink>
                {currentUser
                    ? <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
                    : <OptionLink to="/signin">SIGN IN</OptionLink>
}
                <CartIcon/>
            </OptionsContainer>
            {hidden
                ? null
                : <CartDropdown/>
}

        </HeaderContainer>
    );
};

// const mapStateToProps = state => {     return {currentUser:
// selectCurrentUser(state), hidden: selectCartHidden(state)}; }

const mapStateToProps = createStructuredSelector({currentUser: selectCurrentUser, hidden: selectCartHidden})

export default connect(mapStateToProps)(Header);