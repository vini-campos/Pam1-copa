import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Home from './components/Home';
import Historia from './components/Historia';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <ButtonTabs />
        </NavigationContainer>
    );
}

// buttonTabs e icon do ionicons
function ButtonTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Historia') {
                        iconName = focused ? 'book' : 'book-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#007AFF',
                tabBarInactiveTintColor: 'gray',
                // cor do fundo
                tabBarStyle: {
                    backgroundColor: '#cccbcb',
                }
            })}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{ title: 'Início' }}
            />
            <Tab.Screen
                name="Historia"
                component={Historia}
                options={{ title: 'História da copa' }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});