import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, CheckBox } from 'react-native';
import Constants from 'expo-constants';

const DATA = [
  {
    id: '1',
    title: 'Respeito aos limites de distanciamento entre mesas e cadeiras.',
  },
  {
    id: '2',
    title: 'Os funcionários usam máscaras e sistemas de proteção.',
  },
  {
    id: '3',
    title: ' Havia sinalização no chão e clareza nas regras de distanciamento.',
  },
  {
    id: '4',
    title: 'Álcool em gel à disposição nas áreas do estabelecimento.',
  },
  {
    id: '5',
    title: 'Controle de entrada e saída de clientes para evitar aglomerações.',
  },
  {
    id: '6',
    title: 'Havia papel toalha nos banheiros para higienização das mãos.',
  },
  {
    id: '7',
    title: 'O local possui boa ventilação natural e operava com portas e janelas abertas.',
  },
  {
    id: '8',
    title: 'As informações sobre segurança e higiene estão expostas e claras no estabelecimento.',
  },
  {
    id: '9',
    title: 'Na sua opinião, o estabelecimento está preocupado com as boas práticas de segurança.',
  },
  {
    id: '10',
    title: 'Os alimentos estavam bem preparados e foram servidos de maneira adequada.',
  },
  {
    id: '11',
    title: 'Os alimentos estavam na temperatura correta.',
  },
  {
    id: '12',
    title: 'O pedido estava de acordo com o que foi realizado no aplicativo.',
  },
  {
    id: '13',
    title: 'O pedido foi entregue no tempo estipulado.',
  },
  {
    id: '14',
    title: 'O preço foi justo para o alimento fornecido.',
  },
  {
    id: '15',
    title: 'A sua avaliação em geral para o alimento é positiva.',
  },
  {
    id: '16',
    title: 'A experiência fornecida pelo aplicativo no geral foi boa?.',
  },
];

function Item({ title }) {
  return (
    <View style={styles.item}>
        <CheckBox/>
        <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 15,
  },
});

  



/*import React from 'react';
import { StyleSheet, Text, View, CheckBox} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color: '#888', fontSize: 18}}> Higiene e Limpeza</Text>
    
      <CheckBox/><Text style={{color: '#888', fontSize: 14}}>
      Respeito aos limites de distanciamento entre mesas e cadeiras.
      </Text>

      <CheckBox/><Text style={{color: '#888', fontSize: 14}}> 
      Os funcionários usam máscaras e sistemas de proteção.
      </Text>

      <CheckBox/><Text style={{color: '#888', fontSize: 14}}> 
      Havia sinalização no chão e clareza nas regras de distanciamento.
      </Text>


      <Text style={{color: '#888', fontSize: 18}}>Alimento e Experiência</Text>

      <CheckBox/><Text style={{color: '#888', fontSize: 14}}> 
      Os alimentos estavam bem preparados e foram servidos de maneira adequada.
      </Text>

      <CheckBox/><Text style={{color: '#888', fontSize: 14}}> 
      Os alimentos estavam na temperatura correta.
      </Text>

      <CheckBox/><Text style={{color: '#888', fontSize: 14}}> 
      O pedido estava de acordo com o que foi realizado no aplicativo.
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/