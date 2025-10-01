import axios from "axios";
import {
  PrevisaoReceitaOpenDataView,
  UnidadeGestoraView,
} from "../../types/tce.types";

const api = "https://econtasapi.tce.am.gov.br";

export const processWithFech = async (): Promise<UnidadeGestoraView[]> => {
  const response = await fetch(`${api}/transparencia/dados-abertos/unidades`);

  if (!response.ok) {
    const errorData = await response
      .json()
      .catch(() => ({ message: response.statusText }));
    throw new Error(errorData.message || "Ocorreu um erro na requisição.");
  }

  return response.json();
};

export const processWithAxios = async (): Promise<UnidadeGestoraView[]> => {
  const response = await axios.get<UnidadeGestoraView[]>(
    `${api}/transparencia/dados-abertos/unidades`
  );

  return response.data;
};

export const receitasPrevistar = async (
  idUnidadeGestora: string
): Promise<PrevisaoReceitaOpenDataView[]> => {
  const response = await axios.get<PrevisaoReceitaOpenDataView[]>(
    `${api}/transparencia/dados-abertos/receitasPrevistas/${idUnidadeGestora}/2025`
  );

  return response.data;
};
