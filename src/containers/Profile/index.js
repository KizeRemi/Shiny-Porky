import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Container, Content, List, ListItem, Body, Left, Right, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import ProfileHeader from './ProfileHeader';
import ProfileResume from './ProfileResume';

import { logout, getMemberData } from '../../actions/member';
import { FontAwesomeList } from '../../components/styles/StyledText';

class ProfilePage extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
    getMemberData: PropTypes.func.isRequired,
    member: PropTypes.shape({
      isLoading: PropTypes.bool.isRequired,
      error: PropTypes.string,
    }).isRequired,
  }

  componentDidMount = () => this.props.getMemberData();

  render = () => {
    const { Layout, member, logout } = this.props;

    return (
      <Container>
        <Content>
          <ProfileHeader member={member} />
          <ProfileResume />
          <View style={{ height: 20 }} />
          <List>
            <ListItem onPress={Actions.updateProfile} icon>
              <Left style={{ width: 40 }}>
                <FontAwesomeList></FontAwesomeList>
              </Left>
              <Body>
                <Text>Modifier mon profil</Text>
              </Body>
              <Right>
                <FontAwesomeList></FontAwesomeList>
              </Right>
            </ListItem>
            <ListItem onPress={Actions.creditCardUser} icon>
              <Left style={{ width: 40 }}>
                <FontAwesomeList></FontAwesomeList>
              </Left>
              <Body>
                <Text>Informations bancaires</Text>
              </Body>
              <Right>
                <FontAwesomeList></FontAwesomeList>
              </Right>
            </ListItem>
            <ListItem onPress={Actions.shippingAddress} icon>
              <Left style={{ width: 40 }}>
                <FontAwesomeList></FontAwesomeList>
              </Left>
              <Body>
                <Text>Adresse de livraison</Text>
              </Body>
              <Right>
                <FontAwesomeList></FontAwesomeList>
              </Right>
            </ListItem>
            <ListItem onPress={Actions.notifications} icon>
              <Left style={{ width: 40 }}>
                <FontAwesomeList></FontAwesomeList>
              </Left>
              <Body>
                <Text>Gestion des notifications</Text>
              </Body>
              <Right>
                <FontAwesomeList></FontAwesomeList>
              </Right>
            </ListItem>
          </List>
          <List>
            <ListItem style={{ marginTop: 20 }} onPress={logout} icon>
                <Left style={{ width: 40 }}>
                  <FontAwesomeList></FontAwesomeList>
                </Left>
                <Body>
                  <Text>Se déconnecter</Text>
                </Body>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  member: state.member || {},
});

const mapDispatchToProps = {
  logout: logout,
  getMemberData,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
