//Feito por João Vitor Tamos de Jesus
// Importa as bibliotecas necessárias e os componentes das telas
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaLogin from './telas/TelaLogin';
import TelaRecup from './telas/TelaRecup';
import TelaEstoque from './telas/TelaEstoque';
import TelaAddPeca from './telas/TelaAddPeca';
import TelaEditPeca from './telas/TelaEditPeca';

const Stack = createNativeStackNavigator(); // Cria o sistema de navegação entre telas

export default function App() {
  const [authenticated, setAuthenticated] = useState(false); // Estado que controla se o usuário está autenticado
  const [stock, setStock] = useState([ // Estado que armazena o estoque de peças
    { code: '001', name: 'Parafuso', quantity: 100 },
    { code: '002', name: 'Engrenagem', quantity: 50 },
  ]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {!authenticated ? ( // Se o usuário não estiver autenticado, mostra tela de login e recuperação
          <>
            <Stack.Screen name="Login">
              {(props) => <TelaLogin {...props} setAuthenticated={setAuthenticated} />}
            </Stack.Screen>
            <Stack.Screen name="Recuperar Senha" component={TelaRecup} />
          </>
        ) : ( // Se estiver autenticado, mostra as telas principais do sistema
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
