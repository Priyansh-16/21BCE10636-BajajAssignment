const express = require("express");
var cors = require("cors);
const app = express();
app.use(cors());
app.use(express.json());

app
  .route("/bfhl")
  .get((req, res) => {
    res.status(200).json({ operation_code: 1 });
  })
  .post((req, res) => {
    const data = req.body.data || [];
    const numbers = [];
    const alphabets = [];
    let highest_lowercase_alphabet = "";

    for (const item of data) {
      if (!isNaN(item)) {
        numbers.push(item);
      } else if (item.length === 1 && isNaN(item)) {
        alphabets.push(item);
        if (
          item === item.toLowerCase() &&
          (highest_lowercase_alphabet === "" ||
            item > highest_lowercase_alphabet)
        ) {
          highest_lowercase_alphabet = item;
        }
      }
    }

    res.json({
      is_success: true,
      user_id: "priyansh-16",
      email: "priyansh.singh2021@vitbhopal.ac.in",
      roll_number: "21BCE10636",
      numbers: numbers,
      alphabets: alphabets,
      highest_lowercase_alphabet: highest_lowercase_alphabet
        ? [highest_lowercase_alphabet]
        : [],
    });
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
