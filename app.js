module.exports = {
    dataTypes: function (n) {
        if( (typeof n === 'undefined') || (n === null)) {text = 'no value';} 
        // else if (n === null) {text = 'no value'}
        else if (n.constructor === Array) {
            text = n[2];    
        }        
        else{ 
            switch (typeof n) {
                case 'string':
                    text = n.length;
                    break; 
                case 'boolean':
                    text = n;
                    break;
                case 'number':
                    //text = (n < 100 ) ? 'less than 100' : 'more than 100';
                    if (n < 100) {text = 'less than 100';}
                    else if (n == 100) {text = 'equal to 100';}
                    else{text = 'more than 100';}
                    break;
                case 'function':
                    text = n(true);     
                    break;
                case 'undefined':
                    text = 'no value';
                    break;
            }
        }
        
        return text;
    }
}

