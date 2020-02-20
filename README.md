# react-simple-checkbox

> 

[![NPM](https://img.shields.io/npm/v/react-simple-checkbox.svg)](https://www.npmjs.com/package/react-simple-checkbox) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-basic-checkbox
```

```bash
yarn add react-basic-checkbox
```

## Usage

![CheckBox](https://media.giphy.com/media/kBrUlaNi2k67LUWFXO/giphy.gif)

```jsx
import React from 'react'

import CheckBox from 'react-simple-checkbox'

function Example(){
  return (
    <CheckBox callback={(status)=>{console.log(status)}} /> // Log true or false on console
    <CheckBox marked={false} width={50} height={60} />
  )
}
```

| props    | type                                        
|----------|-----------------------------------------------------
| marked   | boolean     
| width    | number (px)                                          
| height   | number (px)                                          
| callback | function to return checkbox component marked state 

## License

MIT © [gu7z](https://github.com/gu7z)
