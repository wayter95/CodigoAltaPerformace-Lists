let arvore = {
    left: undefined,
    right: undefined,
    center: {
        left: {
            left: {
                left: undefined,
                right: undefined,
                value: 'Filial 1'
            },
            right: {
                left: undefined,
                right: undefined,
                value: 'Filial 2'
            },
            value: 'Regional 1'
        },
        right: {
            left: {
                left: undefined,
                right: undefined,
                value: 'Filial 3'
            },
            right: {
                left: undefined,
                right: undefined,
                value: 'Filial 4'
            },
            value: 'Regional 3'
        },
        center: {
            left: {
                left: undefined,
                right: undefined,
                value: 'Filial 5'
            },
            right: {
                left: undefined,
                right: undefined,
                value: 'Filial 6'
            },
            value: 'Regional 2'
        },
        value: 'Grupo'
    },
    value: 'EMPRESA'
}

function preOrder(tree) {
    console.log(tree.value)
    tree.left && preOrder(tree.left)
    tree.right && preOrder(tree.right)
    tree.center && preOrder(tree.center)
}
function searchFilialinRegional(tree,value){
   if(tree.value === value){
       return searchFilialinRegional(tree.right,tree.left)
    }
}
preOrder(arvore)
console.log(searchFilialinRegional(arvore,'Regional 2'))