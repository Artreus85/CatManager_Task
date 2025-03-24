const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const admin = require("firebase-admin");

const serviceAccount = require("@/backend/catmanager.json"); // Replace with your actual path

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
const catsCollection = db.collection("cats");

const app = express();
app.use(cors());
app.use(express.json());

/** GET /cats - Връща всички котки */
app.get("/cats", async (req, res) => {
  try {
    const snapshot = await catsCollection.get();
    const cats = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(cats);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch cats." });
  }
});

/** POST /cats - Добавя нова котка */
app.post("/cats", async (req, res) => {
  const { name, age, breed } = req.body;

  if (!name || !age || !breed) {
    return res.status(400).json({ error: "Missing name, age, or breed." });
  }

  try {
    const id = uuidv4();
    const newCat = { name, age, breed };
    await catsCollection.doc(id).set(newCat);
    res.status(201).json({ id, ...newCat });
  } catch (err) {
    res.status(500).json({ error: "Failed to create cat." });
  }
});

/** PUT /cats/:id - Обновява котка по ID */
app.put("/cats/:id", async (req, res) => {
  const { id } = req.params;
  const { name, age, breed } = req.body;

  try {
    const catRef = catsCollection.doc(id);
    const doc = await catRef.get();

    if (!doc.exists) {
      return res.status(404).json({ error: "Cat not found." });
    }

    await catRef.update({ name, age, breed });
    res.json({ id, name, age, breed });
  } catch (err) {
    res.status(500).json({ error: "Failed to update cat." });
  }
});

/** DELETE /cats/:id - Изтрива котка по ID */
app.delete("/cats/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const catRef = catsCollection.doc(id);
    const doc = await catRef.get();

    if (!doc.exists) {
      return res.status(404).json({ error: "Cat not found." });
    }

    await catRef.delete();
    res.json({ message: `Cat with ID ${id} deleted.` });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete cat." });
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));