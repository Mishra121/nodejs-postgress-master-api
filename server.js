import express from "express";
import "dotenv/config";

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static("public"));
// app.use(fileUpload());
// app.use(helmet());
// app.use(cors());
// app.use(limiter);

app.get("/", (req, res) => {
  return res.json({ message: "Hello It's working.." });
});

import ApiRoutes from "./routes/api.js";
app.use("/api", ApiRoutes);

// * Jobs import
// import "./jobs/index.js";

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));