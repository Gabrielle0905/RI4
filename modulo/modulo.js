export class Cliente{
    #cpf
    constructor(nome, cpf, endereco){
        this.nome=nome
        this.#cpf=cpf
        this.endereco=endereco
        this.telefones=new Set()
    }

    get nomeUpper(){
        return this.nome.toUpperCase()
    }
    get nomeLower(){
        return this.nome.toLowerCase()
    }

    get cpf(){
        return this.#cpf
    }

    get enderecoUpper(){
        return this.endereco.toUpperCase()
    }
    get enderecoLower(){
        return this.endereco.toLowerCase()
    }

    listarTelefones(){
        let lista = ''
        for(let telefone of this.telefones){
            lista += `ddd: ${telefone.ddd} numero: ${telefone.numero} \n`
        }
        return lista
    }

    detalhar(){
        return `Nome: ${this.nome}
Endereço: ${this.endereco.detalhar()}
${this.listarTelefones()}`
    }
}

export class Empresa{
    #cnpj
    constructor(razaoSocial, nomeFantasia, cnpj, endereco){
        this.razaoSocial=razaoSocial
        this.nomeFantasia=nomeFantasia
        this.#cnpj=cnpj
        this.endereco=endereco
        this.telefones = new Set()
        this.clientes = new Set()
    }

    get razaoUpper(){
        return this.razaoSocial.toUpperCase()
    }
    get razaoLower(){
        return this.razaoSocial.toLowerCase()
    }

    get nomeFanUpper(){
        return this.nomeFantasia.toUpperCase()
    }
    get nomeFanLower(){
        return this.nomeFantasia.toLowerCase()
    }

    get cnpj(){
        return this.#cnpj
    }

    listarTelefones(){
        let lista = ''
        for(let telefone of this.telefones){
            lista += `ddd: ${telefone.ddd} numero: ${telefone.numero}\n`
        }
        return lista
    }

    listarClientes(){
        let lista = ''
        for(let cliente of this.clientes){
            lista += cliente.detalhar() + '\n'
        }
        return lista
    }

    detalhar(){
        return `Razão Social: ${this.razaoSocial}
Nome Fantasia: ${this.nomeFantasia}
--------------------------------
${this.listarClientes()} `
    }
}

export class Endereco{
    constructor(rua, numero, cidade, estado){
        this.estado=estado
        this.cidade=cidade
        this.rua=rua
        this.numero=numero
    }

    get estadoUpper(){
        return this.estado.toUpperCase()
    }
    get estadoLower(){
        return this.estado.toLowerCase()
    }

    get cidadeUpper(){
        return this.cidade.toUpperCase()
    }
    get cidadeLower(){
        return this.cidade.toLowerCase()
    }

    get ruaUpper(){
        return this.rua.toUpperCase()
    }
    get ruaLower(){
        return this.rua.toLowerCase()
    }

    detalhar(){
       return `Estado: ${this.estado} cidade: ${this.cidade} rua: ${this.rua} número: ${this.numero}`
    }
}

export class Telefone{
    constructor(ddd, numero){
        this.ddd=ddd
        this.numero=numero
    }
}