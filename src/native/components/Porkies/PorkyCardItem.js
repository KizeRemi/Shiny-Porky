import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CardItem, Body, Text, Left, Right, Thumbnail, Icon } from 'native-base';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import RajdhaniText from '../../../components/RajdhaniText';
import FavoritePorky from '../../../components/FavoritePorky';
import PorkyIcon from './../../../images/porky-icon.png';

const styles = StyleSheet.create({
  Gray: {
    color: '#969998',
  }
});

class PorkyCardItem extends Component {
  static propTypes = {
    porky: PropTypes.shape().isRequired,
    onPress: PropTypes.func.isRequired,
    onFavoritePorky: PropTypes.func,
    favouritePorkyId: PropTypes.string,
  };

  favoritePorky = () => {
    const { porky } = this.props;
    this.props.onFavoritePorky(porky.id);
  }

  render() {
    const { porky, onPress, onFavoritePorky, favouritePorkyId } = this.props;
    return (
      <TouchableOpacity onPress={() => onPress(porky)}>
        <CardItem >
          <Left>
            <Thumbnail square size={200} source={PorkyIcon} />
            <Body>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>{porky.name.toUpperCase()}</Text>
              <Text style={{fontSize: 10, fontWeight: 'bold'}} note>{'Last update'.toUpperCase()}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Text style={{fontSize: 128, fontWeight: 'bold', textAlign: 'center', width: '100%'}}>{porky.gramme}</Text>
          <Image source={{uri: 'Image URL'}} style={{height: 200, width: null, flex: 1}}/>
        </CardItem>
        <CardItem>
          <Left>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>{`Appartient à ${porky.childName}`.toUpperCase()}</Text>
          </Left>
          {onFavoritePorky &&
            <Right>
              <FavoritePorky isFavorite={porky.id === favouritePorkyId} favoritePorky={this.favoritePorky} />
            </Right>
          }
        </CardItem>
      </TouchableOpacity>
    );
  }
}

export default PorkyCardItem;