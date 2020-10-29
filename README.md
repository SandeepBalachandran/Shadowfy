<h1 align='center'>Shadowfy</h1>
<p align="center">
  <a href="https://github.com/SandeepBalachandran/Shadowfy/releases/" target="_blank">
    <img alt="GitHub release" src="https://img.shields.io/github/v/release/SandeepBalachandran/Shadowfy?include_prereleases&style=flat-square">
  </a>

  <a href="https://github.com/SandeepBalachandran/Shadowfy/commits/master" target="_blank">
    <img src="https://img.shields.io/github/last-commit/SandeepBalachandran/Shadowfy?style=flat-square" alt="GitHub last commit">
  </a>
  
  <a href="https://github.com/SandeepBalachandran/Shadowfy/issues" target="_blank">
    <img src="https://img.shields.io/github/issues/SandeepBalachandran/Shadowfy?style=flat-square&color=red" alt="GitHub issues">
  </a>

  <a href="https://github.com/SandeepBalachandran/Shadowfy/pulls" target="_blank">
    <img src="https://img.shields.io/github/issues-pr/SandeepBalachandran/Shadowfy?style=flat-square&color=blue" alt="GitHub pull requests">
  </a>

  <a href="https://standardjs.com" target="_blank">
      <img alt="ESLint" src="https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square">
   </a>
</p>

# What is this?
Get perfect shadows every time for the non-designer.

# Installation
```cmd 
npm i shadowfy --save</code> 
```

Then ..
....

```js
import { shadowfy } from 'shadowfy'

shadowfy({
    shadow_type:'soft',
    padding:false
});
```

## Options

shadowfy supports 2 options,both of them which are optional,

* *shadow_type* - _hard | soft_ ( Defaults to soft )
* *padding* - _boolean_ ( Defaults to false )  
