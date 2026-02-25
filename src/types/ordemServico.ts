export type StatusOS = "aberta" | "em_andamento" | "finalizada";

export type OrdemServico = {
  id: string;
  cliente: string;
  veiculo: string;
  descricao: string;
  mecanicoEmail: string; // ligação simples com user
  status: StatusOS;
  createdAt: Date;
};