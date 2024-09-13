# Text Tokenization Example in React Native

This project demonstrates the implementation of text tokenization using the SentencePiece algorithm in a React Native application.

## Overview

The project utilizes `tokenizer_config.json` and `tokenizer.json` files from the [sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2](https://huggingface.co/sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2) model for tokenization.

It's important to note that this example is for illustrative purposes only and is not intended for production use. A critical factor to consider is the initial tokenizer initialization time. For instance, on a Xiaomi Redmi 4X device, this process can take up to 40 seconds, which is quite long from a user experience perspective. However, it's worth mentioning that the tokenization itself occurs relatively quickly; the issue lies solely in the lengthy initialization process, which needs to be addressed.

The core code is located in the `App.tsx` file. The graphical interface displays only "Hello World", while the tokenization results are output to the console.

## Installation and Running

1. Clone the repository
2. Install dependencies:
   ```
   yarn install
   ```
3. Run the project for testing

## Integrating Tokenization into Your Project

To add similar functionality to your project, follow these steps:

1. Install the required packages:
   ```
   yarn add @fugood/transformers react-native-fs
   yarn add patch-package postinstall-postinstall --dev
   ```

2. Modify the `node_modules/@fugood/transformers/src/env.js` file:

   ```diff
   diff --git a/node_modules/@fugood/transformers/src/env.js b/node_modules/@fugood/transformers/src/env.js
   index 37762f6..44b601a 100644
   --- a/node_modules/@fugood/transformers/src/env.js
   +++ b/node_modules/@fugood/transformers/src/env.js
   @@ -24,7 +24,7 @@
    import fs from 'fs';
    import path from 'path';
   -import url from 'url';
    import { Buffer } from 'buffer';
    
    import { ONNX } from './backends/onnx.js';
   @@ -45,7 +45,8 @@ let localPath = './';
    if (IS_REACT_NATIVE) {
      localPath = fs.DocumentDirectoryPath;
    } else if (RUNNING_LOCALLY) {
   -  localPath = path.dirname(path.dirname(url.fileURLToPath(import.meta.url)));
   +  localPath = path.dirname(path.dirname(__filename));
    }
    
    // Only used for environments with access to file system
   ```

3. Apply the patch:
   ```
   npx patch-package @fugood/transformers
   ```

4. Add a script to your `package.json` to automatically apply the patch after reinstalling packages:
   ```json
   "scripts": {
     ...
     "postinstall": "patch-package",
     ...
   }
   ```

Your project is now ready to use text tokenization with SentencePiece.