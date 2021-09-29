import { Router } from "express";
import { 
    getActorById,
    getActorsByGender,
    createActor,
    updateActorById,
    deleteActorById
 } from "../repositores/actorRepository";


const router = Router()



router.post('/actor', async (req, res) => {
    const id:string = req.body.id
    const name:string = req.body.name
    const salary:number = req.body.salary
    const dateOfBirth:Date = req.body.dateOfBirth
    const gender:string = req.body.gender

    await createActor(
        id,
        name,
        salary,
        dateOfBirth,
        gender
    )

    res.status(201).send("Criou o usuário")
})

router.put('/actor/:id', async (req,res) => {
    try {
        const id:string = req.params.id
    
        const result = await updateActorById(id, {
            name: req.body.name,
            salary: req.body.salary,
            birth_date: req.body.dataOfBirth,
            gender: req.body.gender 
        })
    
        res.send(result)
        
    } catch (error: any) {
        console.log(error.message)
        res.send("Error")
    }
})

router.delete('/actor/:id', async (req,res) => {
    try {
        const id:string = req.params.id
    
        await deleteActorById(id)
    
        res.send("deletado")
        
    } catch (error: any) {
        res.send(error.mySqlError || error.message)
    }
})

router.get('/actors/:gender', async (req, res) => {
    const gender:string = req.params.gender
    const actors = await getActorsByGender(gender)

    res.send(actors)
})

router.get('/actor/:id', async (req, res) => {
    const id:string = req.params.id
    const actor = await getActorById(id)

    res.send(actor)
})

export default router