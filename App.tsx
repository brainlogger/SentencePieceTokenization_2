import { PreTrainedTokenizer } from '@fugood/transformers';
import React from 'react';
import { Text, View } from 'react-native';

const App = () => {

  React.useEffect(()=>{
    const test = async () => {
      const tokenizerJSON = require('./assets/tokenizer/tokenizer.json');
      const tokenizerConfig = require('./assets/tokenizer/tokenizer_config.json');
      const tokenizer = new PreTrainedTokenizer(tokenizerJSON, tokenizerConfig);
      const encoded = tokenizer.encode('Hello, how are you?');
      console.log(encoded)
      //Output: [0, 35378, 4, 3642, 621, 398, 32, 2]
    };
    test();
  });


  return (
    <View >
      <Text>Hello World</Text>
    </View>
  );
};

export default App;