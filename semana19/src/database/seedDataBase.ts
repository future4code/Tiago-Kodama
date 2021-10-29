import { Seed } from "./Seed";


new Seed()
    .run()
    .then(() => {
        console.log('Finish Seed')
    })
    .catch(err => console.error(err))




