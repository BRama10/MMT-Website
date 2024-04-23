
/**
 * @param {string} str
 */
export function splitStringIntoList(str) {
    // Remove the enclosing quotes and brackets
    str = str.slice(2, -2);
  
    // Split the string into an array of strings
    const list = str.split(",");

   
  
    list[0] = list[0].slice(0, (list[0].indexOf('"')))
    list[1] = list[1].slice(list[1].indexOf('"')+1)
    // console.log(list);
    return list;
  }