import { NextPage } from "next";
import Title from "../../ui/components/Title/Title";
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { useRelatorio } from '../../data/hooks/pages/pets/userelatorio'

const Relatorio: NextPage = () => {
  const { listaRelatorio } = useRelatorio()
  return (
    <>
      <Title
        title={"Relatório de Adoção"}
        subtitle={"veja a lista de pets adotados"}
      />
      <TableContainer
        component={Paper}
        sx={{maxWidth: 830, mx: 'auto', p: {xs: 3, md: 5}}}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Pet</TableCell>
              <TableCell>E-Mail</TableCell>
              <TableCell align={"right"}>Valor</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            {listaRelatorio.map(relatorio => (
            <TableRow key={relatorio.id}>
                <TableCell>{relatorio.pet.name}</TableCell>
                <TableCell>{ relatorio.email }</TableCell>
                <TableCell>{ relatorio.valor }</TableCell>
            </TableRow>              
            ))}

          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default Relatorio;
