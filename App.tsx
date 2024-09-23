import { PreTrainedTokenizer } from '@fugood/transformers';
import React from 'react';
import { Text, View } from 'react-native';
import { FileSystem, Dirs } from 'react-native-file-access';

const App = () => {

  React.useEffect(()=>{
    const test = async () => {
      const startTime = performance.now();
    
      const tokenizerConfigData = await FileSystem.readFile(Dirs.DocumentDir + '/tokenizer_config.json');
      const tokenizerConfig = JSON.parse(tokenizerConfigData);
      
      const tokenizerData = await FileSystem.readFile(Dirs.DocumentDir + '/tokenizer.json');
      const tokenizerJSON = JSON.parse(tokenizerData);

      //On a Xiaomi Redmi 4x device, this line runs for 19 seconds blocking the application interface
      const tokenizer = new PreTrainedTokenizer(tokenizerJSON, tokenizerConfig);

      console.log(`Tokenizer loaded successfully: ${performance.now() - startTime} milliseconds`);

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