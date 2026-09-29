
import { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import { database } from '../firebase/firebaseConfig';
import { onValue, ref ,remove } from 'firebase/database';

type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  status: string;
};

export default function AdminScreen() {
  const [users, setusers] = useState<User[]>([]);
  const [open, setopen] = useState(false);

  useEffect(() => {
    const useref = ref(database, 'users');
    onValue(useref, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const userList: User[] = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setusers(userList);
      }
    });
  }, []);
const deleteuser = (id :string) =>{
remove(ref(database, `users/${id}`))
alert("User deleted successfully")
}
  return (

     
      <ScrollView style={styles.container}>
        <TouchableOpacity onPress={() => setopen(true)}>
          <Text style={styles.mainicon}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.maintext}>All Users</Text>
        {users.map((user) => (
          <View style={styles.card} key={user.id}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>{user.email}</Text>
            <Text style={styles.label}>Status</Text>
            <Text style={styles.status}>{user.status}</Text>

            <TouchableOpacity style={styles.deletebtn} onPress={()=>deleteuser(user.id)}>
              <Text>Delete</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F7FA',
    flex: 1,
    padding: 15,
  },
  maintext: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#222',
  },
  card: {
    backgroundColor: '#FFFFFF',
    marginBottom: 15,
    padding: 20,
    borderRadius: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  mainicon: {
    fontSize: 30,
  },
  overlay: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  mainmenu: {
    backgroundColor: '#2F8F89',
    width: 220,
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 20,
    paddingTop: 50,
  },
  menuItem: {
    color: '#fff',
    fontSize: 18,
    marginVertical: 10,
  },
  name: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 15,
  },
  label: {
    fontSize: 13,
    color: '#888',
    marginTop: 5,
  },
  value: {
    fontSize: 16,
    color: '#333',
    marginTop: 3,
  },
  status: {
    fontSize: 15,
    color: '#159957',
    fontWeight: 'bold',
    marginTop: 3,
  },
  deletebtn : {
    backgroundColor: '#FF6B6B',
    padding: 10,
    borderRadius: 8,
    marginTop: 15,
    alignItems: 'center',
    width: 60,
  }
});
