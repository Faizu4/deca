import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';


import { BackArrowIcon } from '../components/icons/back_arrow_icon.tsx';
import { CloudIcon, PaintBrushIcon, ExitDoorIcon } from '../components/icons/setting.tsx';

export default function ExploreScreen() {
  const router = useRouter()
  return (
    <>
    {/* ---------------- HEADER -------------------*/}
      <View style={styles.container}>
      <TouchableOpacity onPress={() => router.push('/')}> <BackArrowIcon /></TouchableOpacity>
        <Text style={styles.title}>Settings</Text>
      </View>

    {/* ---------------- Storage -------------------*/}
      <View style={styles.container, styles.button_container}>
        <CloudIcon />
        <Text style={styles.cloud_text, styles.title}>Cloud</Text>
      </View>

    {/* ---------------- Appearance -------------------*/}
      <View style={styles.container, styles.button_container}>
        <PaintBrushIcon />
        <Text style={styles.cloud_text, styles.title}>Appearance</Text>
      </View>

    {/* ---------------- SignOut -------------------*/}
      <View style={[styles.container, styles.button_container, styles.signout]}>
        <ExitDoorIcon />
        <Text style={[styles.cloud_text, styles.title, styles.signout_text]}>Sign Out</Text>
      </View>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  button_container: {
    margin: 8,
    paddingLeft: 10,
    display: 'flex',
    flexDirection: 'row',

    height: '12vh',

    alignItems: 'center',
    borderWidth: 3,
    borderStyle: "solid",
    borderColor: '#aaaaaa',
    borderRadius: '10px',
  },
  signout: {
    width: '45%',
    backgroundColor: '#ff0000',
 },
  signout_text: {
    color: '#ffffff'
  },
  title: {
    marginLeft: 9,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
