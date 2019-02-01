
    /*
      *
    * Use string methods split(), slice(), toLowerCase() and toUpperCase() 
    * and array methods join()
    *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
    *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
    */

    const name = "AlbERt eINstEiN";

    function nameFormatter(oldName) {      
      /* 
        Split the string by space
        Slice the first character and make it uppercase
        Slice the reset of the characters and make it lowercase
        Join the splitted array with space to get the final result
        Final result should be "Albert Einstein"                
        */
       const first_str=oldName.split(' ');
       first_str[0]=first_str[0].slice(0,1).toUpperCase()+first_str[0].slice(1).toLowerCase();
       first_str[1]=first_str[1].slice(0,1).toUpperCase()+first_str[1].slice(1).toLowerCase();
       return first_str.join(" ");
    }
    console.log(nameFormatter(name));