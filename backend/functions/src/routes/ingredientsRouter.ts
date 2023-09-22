import express from "express";
import { getClient } from "../db";
import { ObjectId } from "mongodb";
import UserIngredients from "../models/UserIngredients";

const ingredientsRouter = express.Router();

const errorResponse = (error: any, res: any) => {
    console.error("FAIL", error);
    res.status(500).json({ message: "Internal Server Error"})
};

//endpoints

ingredientsRouter.get("/ingredients", async (req, res) => {
    try {
        const client = await getClient();
        
        const result = await client.db().collection<UserIngredients>('ingredients').find().toArray();
        res.json(result);
    } catch (err) {
        errorResponse(err, res);
    }
});

ingredientsRouter.get('/ingredients/find:id', async (req, res) => {
    try {
        const client = await getClient();
        const _id = new ObjectId(req.params.id);

        const result = await client.db().collection<UserIngredients>('ingredients').findOne({_id : _id});

        if (result) {
            res.json(result);
        } else {
            res.status(404).send('User not found')
        }
    } catch (err) {
        errorResponse(err, res);
    }
});

ingredientsRouter.post('/ingredients', async (req, res) => {
    try {
        const client = await getClient();
        const ingredients = req.body as UserIngredients;

        const result = await client.db().collection<UserIngredients>('ingredients').insertOne(ingredients);
        res.status(201).json({_id: result.insertedId, ...ingredients});
    } catch (err) {
        errorResponse(err, res);
    }
});

ingredientsRouter.put('/ingredients/:id', async (req, res) => {
    try {
        const client = await getClient();
        const _id = new ObjectId(req.params.id);
        const ingredients = req.body as UserIngredients;

        const result = await client.db().collection<UserIngredients>('ingredients').replaceOne({_id: _id}, ingredients);

        if(result.matchedCount && result.modifiedCount) {
            res.json({_id: _id, ...ingredients});
        } else {
            res.status(404).send('User not found');
        }
    } catch (err) {
        errorResponse(err, res);
    }
});

ingredientsRouter.delete('/ingredients/:id', async (req, res) => {
    try {
        const client = await getClient();
        const _id = new ObjectId(req.params.id);

        const result = await client.db().collection<UserIngredients>('ingredients').deleteOne({_id: _id});

        if (result.deletedCount) {
            res.sendStatus(204);
        } else {
            res.status(404).send('User not found');
        }
        } catch (err) {
            errorResponse(err, res);
        }
});

export default ingredientsRouter;