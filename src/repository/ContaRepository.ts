import { Conta } from "../model/Conta";

export interface ContaRepository {
    procurarNumero(numero: number): void;
    listarTodos(): void;
    cadastrar(conta: Conta): void;
    atualizar(conta: Conta): void;
    deletar(numero: number): void;

    sacar(numero: number, valor: number): void;
    depositar(numero: number, valor: number): void;
    tranferir(numeroOrigem: number, numeroDestino: number, valor: number): void
}