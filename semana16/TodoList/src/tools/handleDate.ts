export const brFormatToDate = (unformatedDate: string): Date | undefined => {
    const dateArray: Array<string> = unformatedDate.split("/");

    if(dateArray.length !== 3){
      throw new Error("Date has to be dd/mm/aaaa")
    }

    const dateString: Date = new Date(`${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`);

    if(dateString.constructor !== Date){
      throw new Error("Incorrect format of date")
    }

    return dateString;
};


export const dateToBrFormat = (dateString: string) => {
  const date: Date = new Date(dateString)

  const day: number = date.getDate()
  const month: number = date.getMonth()
  const year: number = date.getFullYear()

  return `${day}/${month}/${year}`
}