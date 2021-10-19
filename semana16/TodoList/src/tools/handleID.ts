export const toStringFormatDDD = (id: number): string => {
  const stringID: string = (id + 5).toString();

  switch (stringID.length) {
    case 1:
      return "00" + stringID;
    case 2:
      return "0" + stringID;
    default:
      return stringID;
  }
};
