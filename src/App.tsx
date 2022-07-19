import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

function App() {
  const [catFact, setCatFact] = useState("");
  const [catImageUrl, setCatImageUrl] = useState("");

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
        <hr />
        <Typography
          sx={{ textAlign: "center", my: 1, fontSize: 18, fontWeight: 500 }}
        >
          You can appreciate our work using Kaspi:
        </Typography>
        <Typography sx={{ textAlign: "center" }}>
          Бек Сламбек: +7 707 750 73 82
        </Typography>
        <Typography sx={{ textAlign: "center"}}>
          Дастан Өзгелді: +7 700 268 90 14
        </Typography>
        <Typography sx={{ textAlign: "center", marginBottom: 1.5 }}>
          Дарын Жантілеучик: +7 700 567 70 89
        </Typography>
      </Card>
    </div>
  );
}

export default App;
