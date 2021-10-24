import { Seed } from "./Seed";

new Seed()
    .run()
    .then(() => console.log('Finish seed'))
    .catch(err => console.error(err))