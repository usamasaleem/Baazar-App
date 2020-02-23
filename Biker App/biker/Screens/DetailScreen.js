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
import { Button } from 'react-native-elements';
import MapComponent from '../Components/MapComponent/MapComponent'
import { DATA } from '../Constants/data'
import { Header, Overlay } from 'react-native-elements';

export default class DetailScreen extends Component {

  constructor(props) {
    super(props);
    this.state = { showConfirmOrder: false }
  }

  render() {

    const { navigation } = this.props;

    const  ConfirmOrderDialog = ()=> {
      return <View style={styles.confirmOrderDialog}>
              <Text style={styles.confirmOrderText}>Please Confirm that you accept the order</Text>
              <View style={styles.confirmOrderBtnContainer}>
                <Button title="Cancel"  containerStyle={{width:"40%",marginRight:10}} buttonStyle={{backgroundColor:"#757575"}}
                onPress={()=>{this.setState({showConfirmOrder:false})}} />
                <Button title="Confirm" containerStyle={{width:"40%",marginLeft:10}}/>
              </View>
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
        centerComponent={{ text: 'Order Details', style: { color: '#fff' } }}
        statusBarProps={{ translucent: true }}
        containerStyle={Platform.select({
          android: Platform.Version <= 20 ? { paddingTop: 0, height: 56 } : {},
        })}
      />
      <View style={styles.map}>
        <MapComponent />
      </View>

      <ScrollView>
        <View style={styles.orderDetails}>


          <View style={styles.consumerCard}>
            <Image
              style={styles.consumerCard_image}
              source={{
                uri:
                  'data:image/png;base64,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',
              }}
            />

            <View style={styles.consumerCard_detail}>
              <Text style={styles.consumerCard_title}>Consumer's Name</Text>
              <Text style={styles.consumerCard_detail1}>Address</Text>
              <Text style={styles.consumerCard_detail2}>
                <Text style={styles.consumerCard_boldText}>4.6</Text> km
                       <Text style={styles.consumerCard_boldText}>     2</Text> Stops
                       <Text style={styles.consumerCard_boldText}>     5</Text> Items
            </Text>
              <Text style={styles.consumerCard_mainInfoText}>Rs 1,200</Text>
            </View>


          </View>

          <View style={styles.orderBreakdown}>
            <Text style={styles.orderBreakdown_title}>Order BreakDown</Text>

            <View style={styles.retailerSection}>
              <Text style={styles.retailerSection_name}>Retailer Name</Text>
              <Text style={styles.retailerSection_detail}>Address</Text>
              <Text style={styles.retailerSection_detail}><Text style={styles.consumerCard_boldText}>3</Text> Items</Text>
              <View style={styles.cardListContainer}>
                <FlatList
                  style={styles.cardList}
                  data={DATA}
                  renderItem={({ item }) => <Image
                    style={styles.cardImage}
                    source={{
                      uri:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAAh1BMVEX/8+0AQWr/9/D/+/MANWMAP2kAM2IAPGcAOWUAKl0AMGAAN2QALV/68+0AGlb//vbX19h1iJwAI1ng395mepEAJ1xRaIS3usGUn60AR3CXm6pugZeJlqU3WHrw6eahqrRMYH8mTXIhQ2zLzM++w8iAj6HHw8c2UXRYb4k/X35jcYqssrsnVXr+Bp4DAAAFYUlEQVRoge1ba3eqOhCtkycEahALtFBQxKNt7///fRekD9saTdLBs85a3Z+6lLqZmcwjM8nNzS9+YQkA8gqA6zITSLuizO57ZGXRpYRcixli/fAoOZWC9RCKcvn4oONryE/iPFMhY7MjMBaqLI8nFx+6FZWfmF/5JV110woPdRmI78wjRFDWE9KTjlMT9QDKu8lUD1VwQuGflB9UE8lOluF56gHhchLZ49KCu2dPYnxuqKy4e3Z8zZOXwI57NgtekDUPml9Ya0fgGlf2+FFac8/kI6rZSXXWv7+CVpiKj60NPiKo8bhh6yT4bKbwVjzUyo27NztalCdN5EoeNVhWj1f2bvYKsUJa8KCNWfQMO5KvQ2MZWI8RNkjkpUOAeYMsccg9TN5ndhyjQ+rB3SNFEV17mLw3usbghj+OsXVEsMGQ3Jf8z18kv0Miv/vnJMex+Y12TisDIpzV7ufnAsfP651PhNvhFDPx3ier7ZESS8XdyTlSIQW5T0rNkeoonxXHUhxun5yKlFF7kMLZ6LzAKiAhdQ6wdzhePiB+dHQ28YS3W4PGccdCkcrHA3l960Z+i9mWmi+dNkyqnONx95ntVOPPBCZQMto7wEV0hdyRAq2sRWcUuS1yA4n1gqcJdjsKUmutt3gB5g2ksSzlArSt+RHizCrMyWyCDmQfaaxEj/CVPoA0FsktxG4/vrMnF0uaKJms4R4/X/A3+jxNu/0wvapXZzXPV/Xbk5iAtBg8COrsDDvfD8mMNAXqmoN6uw5Vd2BfGTVPVwfuToXrLVpK7ak5ZTM2lkawPL11Y1E5OHhfcvWPUo5DT+JC0UNSYWPc7D3uRHdKjsULpO34LFfFj4d8MM/bdyuL9pCuiF7efgl24napByrQ7fs3vM1/VlJA+hwepVLRbg4U0GX0I8UyRbPNYZRMNu3RW7Hw+ScrD/L15+Ul7vODLiHelLueVFGqxC7ZjFNckrefNaLW3psmiJPoawXBFtVIBCTWeVFVRa5jMn4SV4tvj0eJ33QZ0t0pnw5Xmrz+3ji7f32a6NWp4Mt3PqonXXg6hYogqb+tpHmdGCa8InSfr0Jj3CIxxRMN5F2g/k+dnJxrj7hz3UHA+XESZftG1zH0iGvd7Nn5p90aBZCEF4pVEUXrbJkky2wdRRdKHBa6lJRwOXEPvymkUlLYlNQO7KTyavudQ2A75oNigc09my0KK9lJ7jxFswG1Ke5AW1nRGcxm3uTchbCFuDxbntvvyVxBkwspFroJFtsbFhdO8cTtJAYfwdZnFQ+FV2/dFtFZf0unFPxQBZq551uvEZo9wq15zdXttNy96MYRAHHt9bmDGjsHkHmMi90gM8OSg3Si2HYM09wHOo9xhitCQ6CBhyuQ84fT5HOfEwKukMvTzjbfX4N8byB3ay37QRkkdzx95QfTmS2v+ZkrjPO21L6z7A1p2rpdIcIp44iV5JMbXZmLGVhNHGDlylxNwGbaGHd+BgGF1+EMWyzOb5ZNXTYUhJcOa13s7fqDm3L5B+r9RHbne4tTFGB3oNoVkd0WHZo7dI8TwYtle4Ckj5dO0buBBU+pdUsKoJlRPHraNk4XbSBNJFKaoTJx7QMC0SX/OT1TvNTEvQc50AtDF9IS/b9vU9+rTfO6ebqlzEt+Jvjt08v3RqmL+JAWmYpc2zRMRCorvIU+oo9189wqLu00wIY2/Pq50THOVTIgJO2K/VqGwxsYX6H/SvJQrpeHO2So0y3SayB/2D/dS845lVIcLowNd8aEkJL2H8r1037o/d+gEh+9wRzqdNM1VVJm2ZoNl+XYf1lWJlXTbdIa5tPwHr/Cxw3BD8C1Lwv+4t/E/0OxWV5d1OzGAAAAAElFTkSuQmCC',
                    }}
                  />
                  }
                  horizontal
                />
              </View>

            </View>

            <View style={styles.retailerSection}>
              <Text style={styles.retailerSection_name}>Retailer Name</Text>
              <Text style={styles.retailerSection_detail}>Address</Text>
              <Text style={styles.retailerSection_detail}><Text style={styles.consumerCard_boldText}>3</Text> Items</Text>
              <View style={styles.cardListContainer}>
                <FlatList
                  style={styles.cardList}
                  data={DATA}
                  renderItem={({ item }) => <Image
                    style={styles.cardImage}
                    source={{
                      uri:
                        'data:image/png;base64,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',
                    }}
                  />
                  }
                  horizontal
                />
              </View>

            </View>

            <View style={styles.acceptOrderBtnContainer}>
              <Button title="Accept Order" containerStyle={styles.acceptOrderBtn} buttonStyle={{ borderRadius: 36 }} 
                  onPress={()=>{this.setState({showConfirmOrder:true})}}
              />
            </View>
          </View>



        </View>
      </ScrollView>


      <Overlay isVisible={this.state.showConfirmOrder} borderRadius={16} onBackdropPress={()=>{this.setState({showConfirmOrder:false})}}
               height={200} >
        <ConfirmOrderDialog />
      </Overlay>
  
    </View>);

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA"
  },
  map: {
    height: "30%",
    width: "100%"
  },
  orderDetails: {
    height: "70%",
    marginTop: 30,
    marginLeft: 30,
    paddingVertical: 10,
    paddingBottom: 20,
  },
  consumerCard: {
    width: "100%",
    flexDirection: "row",
  },
  consumerCard_image: {
    width: 80,
    height: 80,
    marginRight: 20
  },
  consumerCard_detail: {
    flex: 1,
    flexDirection: "column",
  },
  consumerCard_boldText: {
    fontWeight: "bold"
  },
  consumerCard_title: {
    marginBottom: 8,
    fontWeight: "bold"
  },
  consumerCard_detail1: {
    marginBottom: 8,
  },
  consumerCard_detail2: {
    marginBottom: 8,
  },
  consumerCard_mainInfoText: {
    marginTop: 8,
    fontWeight: "bold",
    fontSize: 24,
  },
  orderBreakdown: {
    marginTop: 24,
  },
  orderBreakdown_title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#757575",
  },
  retailerSection: {
    marginTop: 24,
    marginBottom: 16
  },
  retailerSection_name: {
    marginBottom: 6,
    fontWeight: "bold",
    fontSize: 16,
  },
  retailerSection_detail: {
    marginBottom: 6,
  },
  cardListContainer: {
  },
  cardList: {
    marginTop: 20,
    width: "100%",
  },
  cardImage: {
    width: 100,
    height: 100,
    margin: 10,
    marginLeft: 0
  },
  acceptOrderBtnContainer: {
    marginTop: 10,
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: "center",
  },
  acceptOrderBtn: {
    width: "60%",
  },
  confirmOrderDialog:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  confirmOrderText:{
    fontSize:16,
    textAlign:"center"
  },
  confirmOrderBtnContainer:{
    marginTop:20,
    flexDirection:"row",
  },

})