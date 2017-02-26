(function (global) {
    'use strict';

    var fileDialog = (...args) => {
        const input = document.createElement('input')
        // Check if there config obj
        if(typeof args[0] === 'object') {
            if(args[0].multiple === true) input.setAttribute('multiple','')
            if(args[0].accept !== undefined) input.setAttribute('accept',args[0].accept)
        } 
        input.setAttribute('type', 'file')
        
        const evObj = document.createEvent('MouseEvents');
        evObj.initMouseEvent('click', true, true, window);
        input.dispatchEvent(evObj); 

        return new Promise((resolve, reject) => {
            input.addEventListener('change', (e) => {
                resolve(input.files)
                const lastArg = args[args.length - 1]
                if (typeof lastArg === "function") lastArg(input.files)
            })    
        })
}


    if (typeof define === 'function' && define.amd) {
        define(function () { return fileDialog; });
    } else if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = fileDialog;
        }
        exports.fileDialog = fileDialog;
    } else {
        global.fileDialog = fileDialog;
    }
})(this);
