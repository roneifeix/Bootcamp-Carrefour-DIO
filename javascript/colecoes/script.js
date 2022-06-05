/* ATIVIDADE 1 */
/* 
function getAdmins(map) {
    let admins = [];
    for([key, value] of map) {
        if (value == 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luis', 'Admin');
usuarios.set('Stephany', 'Admin');
usuarios.set('Ronei', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Natália', 'User');

console.log(getAdmins(usuarios));
*/



// ##############
/* ATIVIDADE 2 */
const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr) {
    const mySet = new Set(arr);

    return [...mySet];
}

console.log(valoresUnicos(meuArray));