
/**
 * @param {string} str
 */
export function splitStringIntoList(str) {
    str = str.slice(1, -1);
    const list = str.split('","');
  
    list[0] = list[0].slice(1);
    list[list.length - 1] = list[list.length - 1].slice(0, -1);
  
    return list;
}