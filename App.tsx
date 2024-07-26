import React, {useMemo} from 'react';
import {View, StyleSheet} from 'react-native';
import BottomSheet, {BottomSheetTextInput} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  // variables
  const snapPoints = useMemo(() => ['25%', '60%'], []);

  // renders
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={styles.container}>
        <BottomSheet
          keyboardBehavior="extend"
          keyboardBlurBehavior="restore"
          snapPoints={snapPoints}>
          <View style={styles.contentContainer}>
            <BottomSheetTextInput value="Awesome 🎉" style={styles.textInput} />
          </View>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  textInput: {
    alignSelf: 'stretch',
    marginHorizontal: 12,
    marginBottom: 12,
    padding: 12,
    borderRadius: 12,
    backgroundColor: 'grey',
    color: 'white',
    textAlign: 'center',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default App;
