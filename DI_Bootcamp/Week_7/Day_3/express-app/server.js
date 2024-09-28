const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.use(express.json());

const tasksFilePath = path.join(__dirname, 'tasks.json');

if (!fs.existsSync(tasksFilePath)) {
    fs.writeFileSync(tasksFilePath, JSON.stringify([]));
}

const tasksRouter = require('./routes/tasks');
app.use('/tasks', tasksRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
