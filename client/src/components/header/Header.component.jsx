import React from 'react';

import {createStructuredSelector} from 'reselect';

import {connect} from 'react-redux';

import CartDropdown from '../cart-dropdown/CartDropdown.component';
import CartIcon from '../cart-icon/CartIcon.component';

import {ReactComponent as Logo} from '../../assets/crown.svg';
// import {auth} from '../../firebase/firebase.utils.js';

import {selectCartHidden} from '../../redux/cart/cart.selector';
import {selectCurrentUser} from '../../redux/user/user.select';

import {signOutStart} from '../../redux/user/user.actions.js';

// import './Header.styles.scss';
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './Header.styles';

const Header = ({currentUser, hidden, signOutStart}) => {
    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className="logo"/>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop">SHOP</OptionLink>
                <OptionLink to="/contact">CONTACT</OptionLink>
                {currentUser
                    ? <OptionLink as="div" onClick={signOutStart}>SIGN OUT</OptionLink>
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

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser, hidden: selectCartHidden
});
const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);