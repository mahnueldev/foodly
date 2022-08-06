import React from 'react'
import { KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, keyboard } from 'react-native'

const KeyboardAvoid = ({children}) => {
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
        <ScrollView>
        <TouchableWithoutFeedback onPress={keyboard.dismiss}>
            {children}
            </TouchableWithoutFeedback>
        </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default KeyboardAvoid