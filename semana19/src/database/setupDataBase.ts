import { Migrations } from './Migrations'
import { Seed } from "./Seed";


new Migrations()
    .run()
    .then(() => {
        console.log('Finish migration')
    })
    .catch(err => console.error(err))




