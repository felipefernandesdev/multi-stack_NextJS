import type { NextPage } from "next";
import List from "../ui/components/List/List";
import Title from "../ui/components/Title/Title";
import {
  Dialog,
  TextField,
  Grid,
  DialogActions,
  Button,
  Snackbar,
} from "@mui/material";
import { useIndex } from "../data/hooks/pages/useindex";

const Home: NextPage = () => {
  const {
    listPets,
    petSelected,
    setPetSelected,
    email,
    setEmail,
    value,
    setValue,
    message,
    setMessage,
    adotar
  } = useIndex();

  return (
    <div>
      <Title
        title=""
        subtitle={
          <span>
            Com um pequeno valor mensal, você
            <br />
            porde <strong>adotar um pet virtualmente</strong>
          </span>
        }
      />
      <List pets={listPets} onSelect={(pet) => setPetSelected(pet)} />

      <Dialog
        open={petSelected !== null}
        fullWidth
        PaperProps={{ sx: { p: 5 } }}
        onClose={() => setPetSelected(null)}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label={"E-mail"}
              type={"email"}
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              color="success"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label={"Quantia por mês"}
              type={"number"}
              fullWidth
              value={value}
              onChange={(e) => setValue(e.target.value)}
              color="warning"
            />
            {value}
          </Grid>
        </Grid>
        <DialogActions sx={{ mt: 5 }}>
          <Button color={"secondary"} onClick={() => setPetSelected(null)}>
            Cancelar
          </Button>
          <Button variant={"contained"} onClick={() => adotar()}>
            Confirmar Adoção
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={message.length > 0}
        message={message}
        autoHideDuration={3500}
        onClose={() => setMessage("")}
      />
    </div>
  );
};

export default Home;
