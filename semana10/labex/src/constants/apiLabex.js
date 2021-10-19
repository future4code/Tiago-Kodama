export const urlLogin = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/tiagokodama/login'
export const urlCreateTrip = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/tiagokodama/trips'
export const urlGetTrips = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/tiagokodama/trips'

export const urlGetTripDetail = tripId => `https://us-central1-labenu-apis.cloudfunctions.net/labeX/tiagokodama/trip/${tripId}`
export const urlApplyToTripById = id => `https://us-central1-labenu-apis.cloudfunctions.net/labeX/tiagokodama/trips/${id}/apply`
export const urlDeleteTripById = id => `https://us-central1-labenu-apis.cloudfunctions.net/labeX/tiagokodama/trips/${id}`
export const urlDecideCandidateByTripAndCandidate = (tripId, candidateId) => `https://us-central1-labenu-apis.cloudfunctions.net/labeX/tiagokodama/trips/${tripId}/candidates/${candidateId}/decide`