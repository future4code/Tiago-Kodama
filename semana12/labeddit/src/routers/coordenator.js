export const goToLogin = (history) => {
    history.push('/login')
}

export const goToSignUp = (history) => {
    history.push('/signup')
}

export const goToComments = (history, id) => {
    history.push(`/comments/${id}`)
}

export const goToPosts = (history) => {
    history.push(`/posts`)
}