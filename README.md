# Hello World with React and Cloud 9

#### Make sure you have node version 8
```sh
$ nvm i 8
```

##### Download the boilerplate using the BreatheCode CLI
```
$ npm i breathecode-cli -g
```

##### Download the boilerplate using the BreatheCode CLI
```
$ breathecode start:react -r
```

## That is it! 

## How start coding?

Now you have an index.js that will start your javascript execution (like the window.onload).

###### Every time you save your source code (js & css files) you will have to re-build your bundle.

You are ready to go! You can commit & push to your new repository whenever you want.

## How to include images and other files?

To include images, styles or any other type of file just use the **import** command:

```js

    //This will include file.js into your bundle.
    import 'js/file2.js';
    
    //this will include the styles at index.scss to your bundle.
    import '../styles/index.scss';

```