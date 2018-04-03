import React, { Component } from 'react';
import { View } from 'react-native';
import { List, ListItem, Text } from 'react-native-elements';

const LIST_DATA = [
  {
    name: 'Amy Farha',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  }
];

class ListExample extends Component {
  render() {
    return (
      <View>
        <List>
          <Text>List Items</Text>

          {LIST_DATA.map((rowData, i) => (
            <ListItem
              roundAvatar
              key={i}
              title={rowData.name}
              subtitle={rowData.subtitle}
              avatar={{ uri: rowData.avatar_url }}
            />
          ))}
        </List>
      </View>
    );
  }
}

export default ListExample;
