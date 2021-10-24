import { Migrations } from './Migrations'

new Migrations()
    .run()
    .then(() => console.log('Finish migration'))
    .catch(err => console.error(err))