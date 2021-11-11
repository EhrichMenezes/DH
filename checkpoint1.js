function microondas(prato, tc)
{
    let comida = prato.toLowerCase()
    let tempo = 0
    switch (comida)
    {
        case "pipoca":
            tempo = 10
        break
        case "macarrão":
            tempo = 8
        break
        case "carne":
          tempo = 15
        break
        case "feijão":
            tempo = 12
        break
        case "brigadeiro":
            tempo = 8
        break
        default: return "Prato Inexistente, não se esqueça dos acentos!"
    }
    if(tc < tempo)
    {
        return "Prato Pronto \n Tempo Insuficiente!"
    }
    else if(tc >= tempo && tc< (tempo*2))
    {
        return "Prato pronto, bom apetite!!"
    }
    else if(tc >= (tempo*2) && tc < (tempo*3))
    {
        return "Prato Pronto \n A Comida Queimou!"
    }
    else if(tc >= (tempo*3))
    {
        return "Prato Pronto \n KABUUUUM!!!"
    }
}
console.log(microondas("brigadeiro", 6))
