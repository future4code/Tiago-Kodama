export const brFormatToDate = (unformatedDate: string): Date | undefined => {
  try {
    const dateArray: Array<string> = unformatedDate.split("/");
    const dateString: string = `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`;

    return new Date(dateString);
  } catch (error) {
    return undefined;
  }
};
