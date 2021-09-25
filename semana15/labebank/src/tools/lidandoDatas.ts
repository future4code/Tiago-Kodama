export const paraDDMMAAA = (dataMilisegundos: number): string => {
  const dataData = new Date(dataMilisegundos);
  const dia = dataData.getDay();
  const mes = dataData.getMonth();
  const ano = dataData.getFullYear();
  const hora = dataData.getHours();
  const minutos = dataData.getMinutes();

  return `${dia}/${mes}/${ano} ${hora}:${minutos}`;
};

export const ehMaior18 = (nascimento: Date): number => {
  const hoje = new Date(Date.now());

  const fezAniversario =
    hoje.getMonth() >= nascimento.getMonth() &&
    hoje.getDate() >= nascimento.getDate();

  if (fezAniversario) {
    return hoje.getFullYear() - nascimento.getFullYear();
  }

  return hoje.getFullYear() - nascimento.getFullYear() - 1;
};
