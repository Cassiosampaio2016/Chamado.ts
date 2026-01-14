import { Chamado } from "./chamado";
import { ICallRepository } from "./iCallRepository";

export class MemoryCallRepository implements ICallRepository {

    private chamados: Chamado[] = [];

    criarNovoChamado(chamado: Chamado): boolean {
        this.chamados.push(chamado);
        return true;
    }

    atualizarChamado(chamado: Chamado): boolean {
        const index = this.chamados.indexOf(chamado);
        if (index === -1) return false;

        this.chamados[index] = chamado;
        return true;
    }

    listarChamados(): Array<Chamado> {
        return this.chamados;
    }
}
