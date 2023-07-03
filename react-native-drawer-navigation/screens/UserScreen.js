import { Text, View, StyleSheet, Button } from 'react-native';

const UserScreen = ({navigation}) => {
  const openDrawerHandler = () => {
    navigation.toggleDrawer();
  }

  return (
    <View style={styles.container}>
      <Text>User Screen</Text>
      <Button title="Open Drawer" onPress={openDrawerHandler}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default UserScreen;