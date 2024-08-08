const express = require("express");
const router = express.Router();
const Item = require("../models/Item");

// Obtener todos los items
router.get("/items", async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Crear un nuevo item
router.post("/items", async (req, res) => {
    const item = new Item({
        id: req.body.id,
        titulo: req.body.titulo,
        categoria: req.body.categoria,
        imagen: req.body.imagen,
        video: req.body.video,
        descripcion: req.body.descripcion,
    });

    try {
        const newItem = await item.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Actualizar un item
router.put("/items/:id", async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) return res.status(404).json({ message: "Item not found" });

        if (req.body.titulo != null) {
            item.titulo = req.body.titulo;
        }
        if (req.body.categoria != null) {
            item.categoria = req.body.categoria;
        }
        if (req.body.imagen != null) {
            item.imagen = req.body.imagen;
        }
        if (req.body.video != null) {
            item.video = req.body.video;
        }
        if (req.body.descripcion != null) {
            item.descripcion = req.body.descripcion;
        }

        const updatedItem = await item.save();
        res.json(updatedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Eliminar un item
router.delete("/items/:id", async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) return res.status(404).json({ message: "Item not found" });

        // await item.remove();
        await item.deleteOne();
        res.json({ message: "Item deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
