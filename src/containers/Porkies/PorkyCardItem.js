import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CardItem, Body, Left, Right, Thumbnail, ListItem } from 'native-base';
import { Image, TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { TextCard, TextLevelCard, TextLevelLabelCard } from '../../components/styles/StyledText';
import FavoritePorky from '../../components/FavoritePorky';
import PorkyIcon from './../../images/porky-icon.png';
import { timestampToFormatFr } from '../../utils/dateFormatter';

class PorkyCardItem extends Component {
  static propTypes = {
    porky: PropTypes.shape().isRequired,
    onPress: PropTypes.func.isRequired,
    onFavoritePorky: PropTypes.func,
    favouritePorkyId: PropTypes.string,
  };

  shouldComponentUpdate(nextProps) {
    return (this.props.porky !== nextProps.porky
      || this.props.onPress !== nextProps.onPress
      || this.props.onFavoritePorky !== nextProps.onFavoritePorky
      || this.props.favouritePorkyId !== nextProps.favouritePorkyId);
  }

  favoritePorky = () => {
    const { porky } = this.props;
    this.props.onFavoritePorky(porky.id);
  }

  render() {
    const { porky, onPress, onFavoritePorky, favouritePorkyId } = this.props;
    return (
      <TouchableOpacity onPress={() => onPress(porky)}>
        <ListItem avatar style={[styles.Shadow]}>
          <Left>
            <Thumbnail square size={150} source={PorkyIcon} />
          </Left>
          <Body style={{ borderBottomWidth: 0 }}>
            <TextCard style={{ fontSize: 30 }}>{porky.name.toUpperCase()}</TextCard>
            <TextCard style={{ fontSize: 14 }} note>{timestampToFormatFr(porky.lastUpdate).toUpperCase()}</TextCard>
          </Body>
          <Right style={{ borderBottomWidth: 0, alignItems: 'center' }}>
            <TextCard>N I V.</TextCard>
            <TextCard style={{ fontSize: 40 }}>{porky.level.level}</TextCard>
          </Right>
        </ListItem>
        <CardItem cardBody style={styles.Shadow}>
          <TextCard style={{ fontSize: 128, textAlign: 'center', width: '100%' }}>{porky.gramme}</TextCard>
        </CardItem>
        <CardItem style={styles.Shadow}>
          <Left>
            <TextCard style={{ fontSize: 15 }}>{`Appartient à ${porky.childName}`.toUpperCase()}</TextCard>
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

const styles = StyleSheet.create({
  Shadow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
  }
});

export default PorkyCardItem;
