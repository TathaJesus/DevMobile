//Feito por João Vitor Tamos de Jesus

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaLogin from './telas/TelaLogin';
import TelaRecup from './telas/TelaRecup';
import TelaEstoque from './telas/TelaEstoque';
import TelaAddPeca from './telas/TelaAddPeca';
import TelaEditPeca from './telas/TelaEditPeca';

const Stack = createNativeStackNavigator();

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [stock, setStock] = useState([
    { code: '001', name: 'Parafuso', quantity: 100 },
    { code: '002', name: 'Engrenagem', quantity: 50 },
  ]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {!authenticated ? (
          <>
            <Stack.Screen name="Login">
              {(props) => <TelaLogin {...props} setAuthenticated={setAuthenticated} />}
            </Stack.Screen>
            <Stack.Screen name="Recuperar Senha" component={TelaRecup} />
          </>
        ) : (
          <>
            <Stack.Screen name="Estoque">
              {(props) => <TelaEstoque {...props} stock={stock} setStock={setStock} />}
            </Stack.Screen>
            <Stack.Screen name="Adicionar Peça">
              {(props) => <TelaAddPeca {...props} stock={stock} setStock={setStock} />}
            </Stack.Screen>
            <Stack.Screen name="Editar Peça">
              {(props) => <TelaEditPeca {...props} stock={stock} setStock={setStock} />}
            </Stack.Screen>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
