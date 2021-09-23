import { user, PRIVILAGE } from "./types";

export const USERS: Array<user> = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: PRIVILAGE.admin,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: PRIVILAGE.normal,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: PRIVILAGE.normal,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: PRIVILAGE.normal,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: PRIVILAGE.admin,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: PRIVILAGE.admin,
        age: 60
    }
]