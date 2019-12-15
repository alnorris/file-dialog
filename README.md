# file-dialog

[![npm version](https://img.shields.io/npm/v/file-dialog.svg?style=flat)](https://www.npmjs.com/package/file-dialog) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md#pull-requests)

Directly call the file browser dialog from your code, and get back the resulting array of [FileList](https://developer.mozilla.org/en/docs/Web/API/FileList). Handy for when you need to post files via AJAX/Fetch. No more hacky hiding of `<input type="file">` elements. Support for Callbacks & Promises! 

- Supports CommonJS, AMD, and global
- No JQuery needed, tiny (1.25 KB), with no dependencies
- Supports selecting multiple files and the file type 'accepts' attribute (see examples below)
- Support for all major browsers

![alt text](http://i.imgur.com/LjJlg7L.png "Logo Title Text 1")


## Install

### For Webpack/Browserify projects...

1. `npm install file-dialog --save`
2. Require it `const fileDialog = require('file-dialog')` or with ES6 modules `import fileDialog from 'file-dialog'`
3. Note: If you want to support older browsers make sure you have babel enabled.

### Classic `<script>` includes
1. Include minified file-dialog.min.js via `<script>`
2. Module is binded to the global variable `fileDialog`


## Examples

Get a File via a promise and POST to server via Fetch

```javascript
    
fileDialog()
    .then(file => {
        const data = new FormData()
        data.append('file', file[0])
        data.append('imageName', 'flower')

        // Post to server
        fetch('/uploadImage', {
            method: 'POST',
            body: data
        })
    })
```

Allow user to select only an image file

```javascript
    
fileDialog({ accept: 'image/*' })
    .then(files => {
        // files contains an array of FileList
    })
```

Allow user to select only images or videos

```javascript
    
fileDialog({ accept: ['image/*', 'video/*'] })
    .then(files => {
        // files contains an array of FileList
    })
```

Allow user to select multiple image files at once

```javascript
    
fileDialog({ multiple: true, accept: 'image/*' })
    .then(files => {
        // files contains an array of FileList
    })
```

Classic callback version of the above

```javascript
    
fileDialog({ multiple: true, accept: 'image/*' }, files => {
    // files contains an array of FileList
})
```
