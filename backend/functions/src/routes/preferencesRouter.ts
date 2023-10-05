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
    const { allergies } = req.body as UserIngredients;
    const { cuisine } = req.body as UserIngredients;
    const { _id } = req.body as UserIngredients;
    await client
      .db()
      .collection<UserIngredients>("ingredients")
      .updateMany(
        { _id: _id },
        { $set: { allergies, cuisine } },
        { upsert: true }
      );
    res.status(201).json({ allergies, cuisine });
  } catch (err) {
    errorResponse(err, res);
  }
});

preferencesRouter.patch("/preferences/:id/addCuisine", async (req, res) => {
  try {
    console.log(req.body);
    const client = await getClient();
    const _id = req.params.id as unknown as ObjectId;
    const newCuisine = req.body["cuisine"];
    const result = await client
      .db()
      .collection<UserIngredients>("ingredients")
      .updateOne({ _id: _id }, { $push: { cuisine: { $each: newCuisine } } });
    res.json(result);
  } catch (err) {
    errorResponse(err, res);
  }
});

preferencesRouter.patch("/preferences/:id/addAllergies", async (req, res) => {
  try {
    console.log(req.body);
    const client = await getClient();
    const _id = req.params.id as unknown as ObjectId;
    const newAllergies = req.body["allergies"];

    const result = await client
      .db()
      .collection<UserIngredients>("ingredients")
      .updateOne(
        { _id: _id },
        { $push: { allergies: { $each: newAllergies } } }
      );
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
      .collection<UserIngredients>("ingredients")
      .deleteOne({ _id: _id });

    if (result.deletedCount) {
      res.sendStatus(204);
    } else {
      res.status(404).send("Preferences not found");
    }
  } catch (err) {
    errorResponse(err, res);
  }
});

// preferencesRouter.patch("/preferences/:id/update-cuisine", async (req, res) => {
//   try {
//     const client = await getClient();
//     const _id = req.params.id as unknown as ObjectId;
//     const newCuisine = req.body.cuisine;

//     const result = await client
//       .db()
//       .collection<UserIngredients>("preferences")
//       .updateOne({ _id: _id }, { $set: { cuisine: newCuisine } });
//     res.json(result);
//   } catch (err) {
//     errorResponse(err, res);
//   }
// });

// preferencesRouter.put("/preferences/:id", async (req, res) => {
//   try {
//     const client = await getClient();
//     const userId = req.params.id;

//     const cuisine  = req.body as UserIngredients;

//     const result = await client
//       .db()
//       .collection<UserIngredients>("ingredients")
//       .replaceOne({ userId: userId }, cuisine);

//     if (result.matchedCount && result.modifiedCount) {
//       res.json({ userId, ...cuisine });
//     } else {
//       res.status(404).send("User not found");
//     }
//   } catch (err) {
//     errorResponse(err, res);
//   }
// });

export default preferencesRouter;
