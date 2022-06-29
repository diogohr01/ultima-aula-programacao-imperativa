const produtos = [

    {Nome: 'Microondas',
     Valor: 500,
     Qualidade: 8,
     Status: true},
     
    {Nome: 'Geladeira',
    Valor: 800,
    Qualidade: 7,
    Status: true},
    
    {Nome: 'Fogão',
     Valor: 250,
     Qualidade: 4,
     Status: true}
]
let carrinho =  produtos.filter(a => a.Valor >= 482 && a.Valor <= 1600 && a.Qualidade > 6 && a.Status == true)
    

console.log(carrinho)
console.log(`O total é: R$ ${carrinho.reduce((acc, produtos) => acc + produtos.Valor, 0)}`);