import { useState } from "react";

export function useError() {
    const [errMessage, setErrMessage] = useState('')

    return { errMessage, setErrMessage }
}