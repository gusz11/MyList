import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Input from './src/components/Input';
import Logo from './assets/Logo.svg';
import Clipboard from './assets/Clipboard.svg';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
        <View style={styles.header}>
          <Logo width={32} height={32} style={styles.headerImage} />
          <Text style={styles.headerText}>
            My<Text style={styles.headerText2}>List</Text>
          </Text>
        </View>

        <View style={styles.content}>
          <Input />
          <View style={styles.bodyCategory}>
            <View style={styles.bodyCategoryItem} >
              <Text style={styles.bodyCategoryText1}>Criadas</Text>
              <View style={styles.countBadge}>
                 <Text style={styles.countText}>0</Text>
              </View>
            </View>
            <View style={styles.bodyCategoryItem}>
              <Text style={styles.bodyCategoryText2}>Concluídas</Text>
              <View style={styles.countBadge}>
                 <Text style={styles.countText}>0</Text>
              </View>
            </View>
          </View>
          <View style={styles.bar} />
          <View style={styles.body}>
            <Clipboard width={56} height={56}/>
            <Text style={styles.bodyTextHighlight}>Sua lista ainda está vazia</Text>
            <Text style={styles.bodyText}>Adicione algo para se organizar</Text>
          </View>
        </View>
        <StatusBar style="light" backgroundColor="#181818" translucent />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#181818',
    height: 173,
    paddingTop: 40,
  },
  headerImage: {
    marginRight: 4,
  },
  headerText: {
    fontWeight: '900',
    fontSize: 24,
    color: '#00CBCE',
    lineHeight: 28,
  },
  headerText2: {
    color: '#109AE5',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 8,
  },
  bodyText: {
    color: '#FFFFFF',
  },
  bodyCategory: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
    },
  bodyCategoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bodyCategoryText1: {
    color: '#00CBCE',
    fontWeight: '700',
    fontSize: 14,
  },
  bodyCategoryText2: {
    color: '#109AE5',
    fontWeight: '700',
    fontSize: 14,
  },
  bar: {
    backgroundColor: '#333333',
    height: 1,
    marginTop: 20,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyTextHighlight: {
    color: '#7A7A7A',
    fontWeight: '700',
    fontSize: 14,
    marginBottom: 8,
    marginTop: 16,
  },
  bodyText: {
    color: '#7A7A7A',
    fontWeight: '400',
    fontSize: 14,
  },
  countBadge: {
    backgroundColor: '#333333',
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 2,
    width: 25,
    height: 19,
    marginLeft: 8,
    gap: 10,
    alignItems: 'center',
  },
  countText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 12,
  },
});
