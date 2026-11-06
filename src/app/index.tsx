import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

// I
import { UserIcon } from '../components/icons/user_icon.tsx';
import { FolderIcon } from '../components/icons/folder_icon.tsx';
import { FileIcon } from '../components/icons/file_icon.tsx';


export default function IndexScreen() {
  const router = useRouter()
  return (
    <>
    {/* ---------------- HEADER -------------------*/}
    <View class='header' style={styles.header}> 
        <View style={styles.name_view}>
            <TouchableOpacity onPress={() => router.push('/explore')}> <UserIcon /> 
</TouchableOpacity> 
            <Text style={styles.title, styles.name}>Faizu</Text>
        </View>
        <Text style={styles.credit}>$100</Text>
    </View>


    {/* ---------------- Hoster Stats -------------------*/}
    <View class='hoster-stats' style={styles.stats}> 
        <Text style={styles.title}>0.49/1 GB Donated </Text>
        <View style={styles.outer_bar}>
          <View style={styles.outer_bar, styles.inner_bar}></View>
        </View>
    </View>


    {/* ---------------- FILE VIEW -------------------*/}
    <View style={styles.fileview}>
      {/* <Text style={styles.title}>No files</Text> 
      <Text style={styles.subtitle}>Click to add</Text> */}

      <Text style={styles.title}>Files Hosted</Text>
      
      <View style={styles.data}>
          <FolderIcon />
          <Text style={styles.data_text}>Documents</Text>
      </View>

      <View style={styles.data}>
          <FolderIcon />
          <Text style={styles.data_text}>Pictures</Text>
      </View>
      <View style={styles.data}>
          <FileIcon />
          <Text style={styles.data_text}>myself.json</Text></View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  name: {
    marginLeft: 5,
    fontSize: 20,
    fontWeight: 'bold',
  },
  name_view: {

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

  },
  credit: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: '#aaaaaa',
    borderRadius: '6px',
    padding: 5,
  },
  stats: {
    margin: 10,
    padding: 10,

    height: '20vh',
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: '#aaaaaa',
    borderRadius: '6px',
    
  },
  outer_bar: {
    marginTop: 10,
    height: '5vh',
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: '#aaaaaa',
    borderRadius: '10px',
    
  },
  inner_bar: {
   width: '5vw',
   borderColor: 'red', 
  },
  fileview: {
    margin: 10,
    padding: 8,

    height: '50vh',
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: '#aaaaaa',
    borderRadius: '10px',
  },
  fileview_empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  data: {
    display: 'flex',
    flexDirection: 'row',
    
    alignItems: 'center',
    marginVertical: 7,
    padding: 5,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: '#aaaaaa',
    borderRadius: '10px',
    
  },
  data_text: {
    marginLeft: 7,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    marginTop: 8,
    fontSize: 14,
    color: '#666',
  },
});
