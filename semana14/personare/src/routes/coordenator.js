export const goToHome = (history) => {
    history.push('/')
}

export const goToOptions = (history) => {
    history.push('/options')
}

export const goToDetails = (history, id) => {
    history.push(`/details/:${id}`)
}