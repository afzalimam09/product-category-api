import app from "../app.js";

const PORT = process.env.PORT || 5000;

// Listen the app on the PORT
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});
