// import { View, Text , Image } from 'react-native'
// import { Tabs } from 'expo-router'

// import { icons } from '../../assets/icons'

// const TabIcon = ({ icon, color, name, focused}) => {
//     return 
//     <View className='items-center justify-center gab-2' >
//         <Image 
//         source={icon}
//         resizeMode='contain'
//         tintColor={color}
//         className="w-6 h-6"
//         />
//         <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`} 
//         style={{ color: color}}>
//             {name}
//         </Text>
//     </View>
// }

// const TabsLayout = () => {
//     return (
//         <>
//             <Tabs
//                 screenOptions={{
//                     tabBarShowLabel: false,
//                     tabBarActiveTintColor: '#ffA001',
//                     tabBarInactiveTintColor: '#CDCDE0',
//                     tabBarStyle: {
//                         backgroundColor: '#161622',
//                         borderTopWidth: 1,
//                         borderTopColor: '#232533',
//                         height: 84,
//                     }
//                 }}
//             >
//                 <Tabs.Screen 
//                 name='home'
//                 options={{
//                     title: 'Home',
//                     headerShown: false,
//                     tabBarIcon: ({ color , focused}) => { 
//                         <TabIcon
//                         icon={icons.home}
//                         color={color}
//                         name="Home"
//                         focused={focused}
//                         />
//                     }
//                 }}
//                 /><Tabs.Screen 
//                 name='bookmark'
//                 options={{
//                     title: 'Bookmark',
//                     headerShown: false,
//                     tabBarIcon: ({ color , focused}) => { 
//                         <TabIcon
//                         icon={icons.bookmark}
//                         color={color}
//                         name="Bookmark"
//                         focused={focused}
//                         />
//                     }
//                 }}
//                 />
//                 <Tabs.Screen 
//                 name='create'
//                 options={{
//                     title: 'Create',
//                     headerShown: false,
//                     tabBarIcon: ({ color , focused}) => { 
//                         <TabIcon
//                         icon={icons.plus}
//                         color={color}
//                         name="Create"
//                         focused={focused}
//                         />
//                     }
//                 }}
//                 />
//                 <Tabs.Screen 
//                 name='profile'
//                 options={{
//                     title: 'Profile',
//                     headerShown: false,
//                     tabBarIcon: ({ color , focused}) => { 
//                         <TabIcon
//                         icon={icons.profile}
//                         color={color}
//                         name="Profile"
//                         focused={focused}
//                         />
//                     }
//                 }}
//                 />
//             </Tabs>
//         </>
//     )
// }

// export default TabsLayout

import { View, Text, Image } from 'react-native';
import { Tabs } from 'expo-router';

import  {home}  from '../../assets/icons/home.png';
import  {bookmark}  from '../../assets/icons/bookmark.png';
import  {plus}  from '../../assets/icons/plus.png';
import  {profile}  from '../../assets/icons/profile.png';


const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className='items-center justify-center gap-2'>
            <Image 
                source={icon.png}
                resizeMode='contain'
                tintColor={color}
                className="w-6 h-6"
            />
            <Text className={`${focused ? 'font-semibold' : 'font-regular'} text-xs`} 
                style={{ color: color }}>
                {name}
            </Text>
        </View>
    );
};

const TabsLayout = () => {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: '#ffA001',
                    tabBarInactiveTintColor: '#CDCDE0',
                    tabBarStyle: {
                        backgroundColor: '#161622',
                        borderTopWidth: 1,
                        borderTopColor: '#232533',
                        height: 84,
                    }
                }}
            >
                <Tabs.Screen 
                    name='home'
                    options={{
                        title: 'Home',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={home}
                                color={color}
                                name="Home"
                                focused={focused}
                            />
                        ),
                    }}
                />
                <Tabs.Screen 
                    name='bookmark'
                    options={{
                        title: 'Bookmark',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={bookmark}
                                color={color}
                                name="Bookmark"
                                focused={focused}
                            />
                        ),
                    }}
                />
                <Tabs.Screen 
                    name='create'
                    options={{
                        title: 'Create',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={plus}
                                color={color}
                                name="Create"
                                focused={focused}
                            />
                        ),
                    }}
                />
                <Tabs.Screen 
                    name='profile'
                    options={{
                        title: 'Profile',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={profile}
                                color={color}
                                name="Profile"
                                focused={focused}
                            />
                        ),
                    }}
                />
            </Tabs>
        </>
    );
};

export default TabsLayout;
