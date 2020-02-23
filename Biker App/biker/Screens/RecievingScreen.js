import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  StyleSheet,
  Platform
} from 'react-native';
import { CheckBox, Button } from 'react-native-elements';
import { Header } from 'react-native-elements';




export default class RecievingScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {

    const { navigation } = this.props;

    const ItemCard = ({ showCheckbox }) => {
      return <View style={styles.itemCard}>
        <Image
          style={styles.itemCard_image}
          source={{
            uri:
              'data:image/png;base64,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',
          }} />
        <View style={styles.cardInfoContainer}>
          <Text style={styles.itemText}>First Retail Store Name</Text>
          <Text style={styles.itemExtraText}>Address</Text>
          <Text style={styles.itemExtraText}>3 Items</Text>
        </View>

        {showCheckbox &&
          <CheckBox checked={true} />
        }

      </View>
    }


    return (<View style={styles.container} >

      <Header
        leftComponent={{
          icon: 'menu',
          color: '#fff',
          onPress: () => {
            navigation.toggleDrawer();
          },
          underlayColor: 'none',
        }}
        centerComponent={{ text: 'ORDER RECIEVING', style: { color: '#fff' } }}
        statusBarProps={{ translucent: true }}
        containerStyle={Platform.select({
          android: Platform.Version <= 20 ? { paddingTop: 0, height: 56 } : {},
        })}
      />

      <View style={styles.contentContainer}>
        <ItemCard />

        <View style={styles.ItemList}>
          <Text style={styles.ItemListTitle}>Item List</Text>
          <ScrollView style={styles.ItemCardList}>
            <ItemCard showCheckbox />
            <ItemCard showCheckbox />
            <ItemCard showCheckbox />
            <ItemCard showCheckbox />
            <ItemCard showCheckbox />
            <ItemCard showCheckbox />
          </ScrollView>
        </View>

        <Text style={styles.TotalPrice}>Total Rs 550</Text>
        <View style={styles.RecieveBtnContainer}>
          <Button title="Recieve" containerStyle={{ width: "60%" }} buttonStyle={{ borderRadius: 36 }} />
        </View>


      </View>




    </View>);

  }



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  itemCard: {
    flexDirection: "row",
    margin: 10,
    marginTop: 20,
  },
  itemCard_image: {
    width: 60,
    height: 60,
  },
  cardInfoContainer: {
    marginLeft: 10,
    flexBasis: "70%",
  },
  ItemList: {

    marginTop: 20,
  },
  ItemListTitle: {
    marginLeft: 10,
    marginBottom:10,
    fontSize: 18,
  },
  TotalPrice: {
    marginLeft: 10,
    marginTop: 30,
    fontSize: 22,
    fontWeight: "bold"
  },
  RecieveBtnContainer: {
    marginTop:20,
    paddingBottom: 20,
    alignItems: "center"
  },
  ItemCardList:{
    height:"55%"
  }

})