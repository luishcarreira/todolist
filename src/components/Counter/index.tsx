
import { View, Text } from 'react-native';

import { styles } from './styles';

type Props = {
    count: number
}

export function Counter({count}: Props) {
  return (
    <View style={styles.container}>
        <Text style={{color: '#fff'}}>{count}</Text>
    </View>
  );
}