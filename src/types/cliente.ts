export type Cliente = {
  id: string;
  nome: string;
  telefone: string;
  email?: string;
  cpf: string;
  createdAt: Date;
};