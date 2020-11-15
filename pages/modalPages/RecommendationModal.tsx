//here should be implemented the logic for buying extra recommendations

import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Image, Text, Dimensions, ImageBackground, Button} from 'react-native';

const RecommendationModal = ( {route, navigation } : any) => {
    const { description } = route.params;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 24 }}>{description}</Text>
        <Button onPress={() => navigation.goBack()} title="Dismiss" />
      </View>
    );
  };

export default RecommendationModal;