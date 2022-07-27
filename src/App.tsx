import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

function App() {
  const [catFact, setCatFact] = useState("Bek loves cats");
  const [catImageUrl, setCatImageUrl] = useState(
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  );

  const styles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "25vh",
  };

  const getCatFact = () => {
    return fetch("https://meowfacts.herokuapp.com/")
      .then((res) => res.json())
      .then((data) => setCatFact(data.data[0]));
  };

  const getCatImage = () => {
    return fetch("https://api.thecatapi.com/v1/images/search")
      .then((res) => res.json())
      .then((data) => setCatImageUrl(data[0].url));
  };

  useEffect(() => {
    getCatFact();
    getCatImage();
  }, []);

  return (
    <div style={styles}>
      <Card sx={{ maxWidth: 400 }}>
        <CardContent style={{ display: "flex", gap: "4px" }}>
          <div className="text">
            <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
              Here is yo cat fact 🐈
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {catFact}
            </Typography>
          </div>
          <img width={128} height={"100%"} src={catImageUrl} alt="random cat" />
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button
            size="small"
            onClick={getCatFact}
            variant="contained"
            color="primary"
          >
            Get a new fact
          </Button>
          <Button
            size="small"
            onClick={getCatImage}
            variant="contained"
            color="primary"
          >
            Get a new image
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default App;
