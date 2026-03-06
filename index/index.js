import {Cliente, Empresa, Endereco, Telefone} from '../modulo/modulo.js'

let tel1 = new Telefone('12', '147258369')
let tel2 = new Telefone('12', '123456789')
let tel3 = new Telefone('12', '369852147')
let tel4 = new Telefone('12', '987456321')
let tel5 = new Telefone('12', '741085296')
let tel6 = new Telefone('12', '321065499')
let tel7 = new Telefone('12', '258301465')
let tel8 = new Telefone('11', '396587453')
let tel9 = new Telefone('15', '953366998')
let tel10 = new Telefone('12', '226699854')
let tel11 = new Telefone('23', '36985241')
let tel12 = new Telefone('12', '885597463')

let endereco1 = new Endereco('Av. Sebastião Alberto', '550', 'São Jose dos Campos', 'SP')
let endereco2 = new Endereco('Breno de Moura', '930', 'São Jose dos Campos', 'SP')
let endereco3 = new Endereco('Av. Juscelino', '1084', 'São Jose dos Campos', 'SP')
let endereco4 = new Endereco('André Plusplatais', '75', 'São Jose dos Campos', 'SP')
let endereco5 = new Endereco('Elmano Ferreira', '115', 'São Jose dos Campos', 'SP')
let endereco6 = new Endereco('Cachoeira Paulista', '86', 'Jacareí', 'SP')

let cliente1 = new Cliente('Cleber', '123456789', endereco2)
cliente1.telefones.add(tel1)
cliente1.telefones.add(tel2)

let cliente2 = new Cliente('Miriam', '124578963', endereco4)
cliente2.telefones.add(tel3)
cliente2.telefones.add(tel4)

let cliente3 = new Cliente('Paulo', '369258147', endereco3)
cliente3.telefones.add(tel5)
cliente3.telefones.add(tel6)

let cliente4 = new Cliente('Cristina', '852741963', endereco6)
cliente4.telefones.add(tel7)
cliente4.telefones.add(tel8)

let cliente5 = new Cliente('Joelma', '654983217', endereco5)
cliente5.telefones.add(tel9)
cliente5.telefones.add(tel10)

let emp1 = new Empresa('DEF Ltda', 'Brincando Juntos', '678956413', endereco1)
emp1.telefones.add(tel11)
emp1.telefones.add(tel12)

emp1.clientes.add(cliente1)
emp1.clientes.add(cliente2)
emp1.clientes.add(cliente3)
emp1.clientes.add(cliente4)
emp1.clientes.add(cliente5)

console.log(emp1.detalhar())