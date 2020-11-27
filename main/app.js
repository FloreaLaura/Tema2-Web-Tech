function addTokens(input, tokens){
     //a)
     if (typeof input !== 'string')
     {
        throw("Invalid input");
     }
 
     //b)
     if(input.length < 6){
         throw 'Input should have at least 6 characters';
     }

     //c)
     if (tokens === null) {
        throw Error('Invalid array format');
     }
     else 
     if (typeof tokens[0].tokenName !== typeof 'string' ) {
        throw Error('Invalid array format');
     }

     //d
     if(!(input.includes("...", 0))){
        return input;
    }

    //e
    if(input.includes('...'))
    {
       i = input.replace('...','${'+tokens[0].tokenName+'}');
    }
    return i;
}

const app = {
    addTokens: addTokens
}

module.exports = app;