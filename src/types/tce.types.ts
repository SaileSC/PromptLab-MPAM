export type UnidadeGestoraView = {
  id_unidade_gestora: number;
  cnpj: string;
  nome: string;
  ativo: boolean;
  esfera: number;
  sigla: string;
  idMunicipio: number;
  desMunicipio: string;
};

export type PrevisaoReceitaOpenDataView = {
  idPrevisaoReceita: number;
  idUnidadeGestora: number;
  cnpjUnidadeGestora: string;
  nomeUnidadeGestora: string;
  codItemReceita: number;
  desItemReceita: string;
  vlItemReceita: number;
  codCompetencia: number;
  exercicio: number;
};
