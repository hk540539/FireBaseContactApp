import HomeScreen from './screens/HomeScreen';
import AddNewContact from './screens/AddNewContact';
import ViewContact from './screens/ViewContact';
import EditContact from './screens/EditContact';

//TODO: import firebase
import * as firebase from 'firebase';

// set up react navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const MainNavigator = createStackNavigator(
	{
		Home: { screen: HomeScreen },
		Add: { screen: AddNewContact },
		View: { screen: ViewContact },
		Edit: { screen: EditContact }
	},
	{
		defaultNavigationOptions: {
			headerTintColor: '#fff',
			headerStyle: {
				backgroundColor: '#B83227'
			},
			headerTitleStyle: {
				color: '#fff'
			}
		}
	}
);

const App = createAppContainer(MainNavigator);

var firebaseConfig = {
	apiKey: 'AIzaSyDzgnP3-c_Gshu_dTf5T2PL4otiLjWd4J4',
	authDomain: 'reactfirebaseapp-42cb6.firebaseapp.com',
	databaseURL: 'https://reactfirebaseapp-42cb6.firebaseio.com',
	projectId: 'reactfirebaseapp-42cb6',
	storageBucket: 'reactfirebaseapp-42cb6.appspot.com',
	messagingSenderId: '1030136452106',
	appId: '1:1030136452106:web:8a8f6518cb4c4413d23bf3',
	measurementId: 'G-N9CS7RDL9X'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default App;
