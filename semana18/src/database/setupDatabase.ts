import { Migration } from "./Migration";
import { Seed } from "./Seed";

    const migration = new Migration()
    const seed = new Seed()
    
    migration.up()
        .then(() => seed.execute())
        .catch(err => console.error(err))
    
