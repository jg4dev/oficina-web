import { OrdemServico } from "src/types/ordemServico";

export const ordens: OrdemServico[] = [
  {
    id: "1",
    cliente: "João Silva",
    veiculo: "Gol 2015",
    descricao: "Troca de embreagem",
    mecanicoEmail: "mecanico@oficina.com",
    status: "aberta",
    createdAt: new Date(),
  },
];