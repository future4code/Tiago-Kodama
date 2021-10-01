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
