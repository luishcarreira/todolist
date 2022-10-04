
import BouncyCheckbox from "react-native-bouncy-checkbox";

import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

import { styles } from './styles';
import { THEME } from "../../theme";

export type TaskProps = {
    id: number;
    isChecked: boolean;
    description: string;
    onRemove: () => void;
    onChecked: () => void;
}

export function Task({isChecked, description, onRemove, onChecked}: TaskProps) {

  return (
    <View style={styles.container}>
        <BouncyCheckbox
            style={{ marginLeft: 5}}
            fillColor={THEME.COLORS.PRIMARY}
            onPress={onChecked}
        />

        <Text style={ !isChecked ? styles.name : styles.nameDecoration}>{description}</Text>

        <TouchableOpacity 
          style={styles.button}
          onPress={onRemove}
        >
            <Feather 
                name='trash-2'
                size={20}
                color={'#808080'}
            />
        </TouchableOpacity> 
    </View>
  );
}