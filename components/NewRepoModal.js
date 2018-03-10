import React, { Component} from 'react';

import {
   View,
   Text,
   Modal,
   TextInput,
   StyleSheet,
   TouchableOpacity,
 } from 'react-native';

 export default class NewRepoModal extends Component {
   state = {
     NewRepoText: '',
   };

   render(){
     return(
       <Modal animationType="fade" transparent={true} visible={this.props.visible}>
         <View style={styles.modalContainer}>
           <View style={styles.boxContainer}>
             <Text style={styles.boxTitle}>Adicionar repo</Text>
             <TextInput
               autoFocus
               autoCapitalize='none'
               style={styles.boxInput}
               underlineColorAndroid="rgba(0,0,0,0)"
               placeholder="organização/repositorio"
               value={this.state.NewRepoText}
               onChangeText={NewRepoText => this.setState({ NewRepoText})}
             />

             <View style={styles.buttonContainer}>
               <TouchableOpacity
                 style={[styles.button, styles.cancelbutton]}
                 onPress={this.props.onCancel}
                 >
                   <Text style={styles.buttonText}>Cancelar</Text>
                 </TouchableOpacity>

                 <TouchableOpacity style={[styles.button, styles.submitButton]}
                   onPress={() => this.props.onAdd(this.state.NewRepoText)}
                   >
                     <Text style={styles.buttonText}>Adicionar</Text>
                   </TouchableOpacity>
             </View>
           </View>
         </View>
       </Modal>
     );
   }
 }

 const styles = StyleSheet.create({
   modalContainer: {
     flex: 1,
     backgroundColor: 'rgba(0, 0, 0, 0.7)',
     justifyContent: 'center',
     alignItems: 'center',
   },

   boxContainer: {
     padding: 20,
     backgroundColor: '#FFF',
     borderRadius: 10,
     alignItems: 'center',
     width: 280,
   },

   boxTitle: {
     fontWeight: 'bold',
     fontSize: 16,
   },

   boxInput: {
     alignSelf: 'stretch',
     marginTop: 10,
     paddingVertical: 0,
     paddingHorizontal: 20,
     borderWidth: 1,
     borderColor: '#DDD',
     height: 40,
     borderRadius: 3,
   },

   buttonContainer: {
     marginTop: 10,
     height: 40,
     flexDirection: 'row',
   },

   button: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
     borderRadius: 3
   },

   cancelbutton: {
     backgroundColor: '#E25F5F',
     marginRight: 5,
   },

   submitButton: {
     backgroundColor: '#70BD85',
     marginLeft: 5,
   },

   buttonText: {
     fontWeight: 'bold',
     color: '#FFF',
     fontSize: 12,
   },
 })
