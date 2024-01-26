import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export default function App() {
    const numbers = [7,8,9,'*',4,5,6,'-',1,2,3,'+'];
    const [total, setTotal] = React.useState('');
    const [operatorEntered, setOperatorEntered] = React.useState(false);

    const handleButtonPress = (value: string) => {
        if(value === "clear"){
            setTotal("")
            setOperatorEntered(false);
        } else if (value === '='){
            const result = eval(total);
            setTotal(String(result));
            setOperatorEntered(false);
        } else if(value === '+'){
             if (!operatorEntered) {
                setTotal(total + '+');
                setOperatorEntered(true);
             }
        } else if(value === '-'){
              if (!operatorEntered) {
                 setTotal(total + '-');
                 setOperatorEntered(true);
              }
        }else if(value === '/'){
              if (!operatorEntered) {
                 setTotal(total + '/');
                 setOperatorEntered(true);
              }
        }else if (value === '*'){
              if (!operatorEntered) {
                 setTotal(total + '*');
                 setOperatorEntered(true);
              }
        }else {
             setTotal(total + value);
             setOperatorEntered(false);
        }
    }
     return (
            <SafeAreaView>
                <TextInput
                    style={styles.input}
                    showSoftInputOnFocus={false}
                    value={total}
               />
                <View style={styles.button_row}>

                    <TouchableOpacity style={styles.clear_button} onPress={() => {handleButtonPress('clear')}}>
                        <Text style={styles.button_text}>clear</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.number_button, operatorEntered && styles.disabled_button]} onPress={() => {handleButtonPress('/')}} disabled={operatorEntered}>
                        <Text style={styles.button_text}>/</Text>
                    </TouchableOpacity>
                    {numbers.map((item)=>(
                        <TouchableOpacity
                            key={item}
                            style={[styles.number_button, operatorEntered && (item === '+' || item === '-' || item === '/' || item === '*') && styles.disabled_button]}
                            onPress={() => { handleButtonPress(item)}}
                            disabled={operatorEntered && (item === '+' || item === '-' || item === '/' || item === '*')}
                        >
                            <Text style={styles.button_text}>{item}</Text>
                        </TouchableOpacity>
                    ))}
                    <TouchableOpacity style={styles.number_button} onPress={() => {handleButtonPress('0')}}>
                        <Text style={styles.button_text}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.clear_button} onPress={() => {handleButtonPress('=')}}>
                        <Text style={styles.button_text}>=</Text>
                    </TouchableOpacity>

                </View>
            </SafeAreaView>
     );
}
const styles = StyleSheet.create({
    input: {
        height: 280,
        width: '100%',
        fontSize: 35,
        textAlign: 'right',
        borderWidth: 1,
    },
    button_row: {
        flexDirection: 'row',
        flexWrap:  'wrap',
        gap: 10,
        width: '90%',
        marginTop: 20,
        marginLeft: 20
    },
    clear_button: {
        height: 80,
        width: 260,
        borderRadius: 50,
        backgroundColor: '#009bbd',
        justifyContent: 'center',
        alignItems: 'center'
    },
    number_button: {
        height: 80,
        width: 80,
        borderRadius: 50,
        backgroundColor: '#009bbd',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button_text: {
        color: '#ffffff',
        fontSize: 35
    },
    disabled_button: {
        backgroundColor: '#ccc',
    },
});