// function abc(son) {
//     let birxona = son % 10;
//     let ikkixona = (son % 100) - birxona;
//     let uchxona = ((son % 1000) - ikkixona - birxona).toFixed();
//     let tortxona = ((son % 10000) - uchxona - ikkixona - birxona).toFixed();
//     let beshxona = ((son % 100000) - tortxona - uchxona - ikkixona - birxona).toFixed();
//     if (ikkixona == 0) ikkixona = '';
//     else ikkixona /= 10;
//     if (uchxona == 0) uchxona = '';
//     else uchxona /= 100;
//     if (tortxona == 0) tortxona = '';
//     else tortxona /= 1000;
//     if (beshxona == 0) beshxona = '';
//     else beshxona /= 10000;
//     // return `${birxona}  ${ikkixona/10}  ${uchxona/100}  ${tortxona/1000}  ${beshxona/10000}`
//     return +`${birxona}${ikkixona}${uchxona}${tortxona}${beshxona}`
// }
// console.log(abc());






// function check(son){
//     let son2 = `${son}`;
//     let notreverse = son2.split('');
//     let reverse = son2.split('').reverse();
//     let one = `${reverse}`;
//     let two = `${notreverse}`;
//     if (one == two) return true;
//     else if (one != two) return false;
// }
// console.log(check(11111));
