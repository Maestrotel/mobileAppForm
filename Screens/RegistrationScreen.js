import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Linking,
  TouchableOpacity,
  Image,
  Dimensions,
  Keyboard,
} from 'react-native';

function RegistrationScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const nameHandler = text => setName(text);
  const emailHandler = text => setEmail(text);
  const passwordHandler = text => setPassword(text);

  const [focus1, setFocus1] = useState(false);
  const [focus2, setFocus2] = useState(false);
  const [focus3, setFocus3] = useState(false);

  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const onLogin = () => {
    Keyboard.dismiss();
    console.log(`name ${name} + email ${email} + password ${password}`);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const handlePress = () => {
    Linking.openURL('https://google.com');
  };

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../assets/empty-avatar.png')}
          style={styles.avatar}
        />
        <Image source={require('../assets/add.png')} style={styles.add} />
      </View>

      {/* <View>
        <Image
          source={require('../assets/full-avatar.png')}
          style={styles.avatar}
        />
        <Image source={require('../assets/remove.png')} style={styles.add} />
      </View> */}

      <Text style={styles.title}>Registration</Text>
      <TextInput
        value={name}
        style={[
          styles.register,
          { borderColor: focus1 ? '#FF6C00' : '#EAEAEA' },
        ]}
        onChangeText={nameHandler}
        placeholder="Login"
        onFocus={() => setFocus1(true)}
        onBlur={() => setFocus1(false)}
      />
      <TextInput
        value={email}
        style={[
          styles.register,
          { borderColor: focus2 ? '#FF6C00' : '#EAEAEA' },
        ]}
        onChangeText={emailHandler}
        placeholder="Email"
        onFocus={() => setFocus2(true)}
        onBlur={() => setFocus2(false)}
      />
      <View style={styles.placeholder}>
        <TextInput
          value={password}
          secureTextEntry={!isPasswordVisible}
          style={[
            styles.register,
            { borderColor: focus3 ? '#FF6C00' : '#EAEAEA' },
          ]}
          onChangeText={passwordHandler}
          placeholder="Password"
          onFocus={() => setFocus3(true)}
          onBlur={() => setFocus3(false)}
        />
        <Text style={styles.show}>
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Text style={styles.show_text}>
              {isPasswordVisible ? 'Hide' : 'Show'}
            </Text>
          </TouchableOpacity>
        </Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.btn}
        onPress={onLogin}
      >
        <Text style={styles.btn_text}>Register</Text>
      </TouchableOpacity>
      <Text>
        <TouchableOpacity onPress={handlePress} style={styles.entry}>
          <Text style={styles.entry_text}>Already have an account? Enter</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: '68%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    width: Dimensions.get('window').width,
  },
  avatar: {
    position: 'absolute',
    top: -60,
    left: -40,
  },
  add: {
    position: 'relative',
    top: 25,
    right: -67,
  },
  title: {
    fontSize: 30,
    marginTop: 60,
    marginBottom: 32,
    fontFamily: 'Roboto-Medium',
  },
  register: {
    borderWidth: 1,
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    width: '90%',
    padding: 16,
    fontSize: 16,
    marginBottom: 16,
    fontFamily: 'Roboto-Regular',
  },
  placeholder: {
    width: '100%',
    marginLeft: '10%',
  },
  show: {
    position: 'absolute',
    top: 20,
    right: 55,
  },
  show_text: {
    color: '#1B4371',
  },
  btn: {
    borderRadius: 30,
    padding: 16,
    backgroundColor: '#FF6C00',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 25,
  },
  btn_text: {
    color: 'white',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
  entry: {
    marginTop: 10,
  },
  entry_text: {
    color: '#1B4371',
    fontFamily: 'Roboto-Regular',
  },
});

export default RegistrationScreen;
