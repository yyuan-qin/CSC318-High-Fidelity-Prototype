import { Tabs } from 'expo-router';
import React from 'react';

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'green',
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Storage',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'fridge' : 'fridge-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="meal-generator"
        options={{
          title: 'Meal Generator',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'food' : 'food-outline'} 
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'account' : 'account-outline'} 
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
