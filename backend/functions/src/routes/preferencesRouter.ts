import express from "express";
import { getClient } from "../db";
import { ObjectId } from "mongodb";
import UserIngredients from "../models/UserIngredients";

const preferencesRouter = express.Router();

const errorResponse = (error: any, res: any) => {
  console.error("FAIL", error);
  console.error(error.stack);
  res.status(500).json({ message: "Internal Server Error" });
};

//endpoints

preferencesRouter.get("/preferences", async (req, res) => {
  try {
    const client = await getClient();

    const result = await client
      .db()
      .collection<UserIngredients>("ingredients")
      .find()
      .toArray();
    res.json(result);
    //value from result obj. cuisine/allergies
  } catch (err) {
    errorResponse(err, res);
  }
});

preferencesRouter.post("/preferences", async (req, res) => {
  try {
    const client = await getClient();
    const allergies = req.body as UserIngredients;
    const cuisine = req.body as UserIngredients;

    await client
      .db()
      .collection<UserIngredients>("preferences")
      .updateMany({ allergies }, { cuisine });
    res.status(201).json({ allergies, cuisine });
  } catch (err) {
    errorResponse(err, res);
  }
});

preferencesRouter.put("/preferences/:id", async (req, res) => {
  try {
    const client = await getClient();
    const userId = req.params.id;
    const preferences = req.body as UserIngredients;

    const result = await client
      .db()
      .collection<UserIngredients>("preferences")
      .replaceOne({ userId: userId }, preferences);

    if (result.matchedCount && result.modifiedCount) {
      res.json({ userId, ...preferences });
    } else {
      res.status(404).send("User preferences not found");
    }
  } catch (err) {
    errorResponse(err, res);
  }
});

//cuisine & allergies - two/patches to handle seperate
preferencesRouter.patch(
  "/preferences/:id/update-allergies",
  async (req, res) => {
    try {
      console.log(req.body);
      const client = await getClient();
      const _id = req.params.id as unknown as ObjectId;
      const newAllergies = req.body.allergies;

      const result = await client
        .db()
        .collection<UserIngredients>("preferences")
        .updateOne({ _id: _id }, { $set: { allergies: newAllergies } });
      res.json(result);
    } catch (err) {
      errorResponse(err, res);
    }
  }
);

preferencesRouter.patch("/preferences/:id/update-cuisine", async (req, res) => {
  try {
    const client = await getClient();
    const _id = req.params.id as unknown as ObjectId;
    const newCuisine = req.body.cuisine;

    const result = await client
      .db()
      .collection<UserIngredients>("preferences")
      .updateOne({ _id: _id }, { $set: { cuisine: newCuisine } });
    res.json(result);
  } catch (err) {
    errorResponse(err, res);
  }
});

preferencesRouter.delete("/preferences/:id", async (req, res) => {
  try {
    const client = await getClient();
    const _id = req.params.id as unknown as ObjectId;

    const result = await client
      .db()
      .collection<UserIngredients>("preferences")
      .deleteOne({ _id: _id });

    if (result.deletedCount) {
      res.sendStatus(204);
    } else {
      res.status(404).send("User preferences not found");
    }
  } catch (err) {
    errorResponse(err, res);
  }
});

export default preferencesRouter;
