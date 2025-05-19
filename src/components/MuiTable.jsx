import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
const tableData = [
  {
    id: 1,
    firstName: "Devi",
    lastName: "Thimmaiahgari",
    email: "devi@gmail.com",
  },
  {
    id: 2,
    firstName: "Roja",
    lastName: "Doe",
    email: "roja@gmail.com",
  },
  {
    id: 3,
    firstName: "Deeskha",
    lastName: "Reddy",
    email: "deeskha@gmail.com",
  },
  {
    id: 4,
    firstName: "Deepthi",
    lastName: "Sunaina",
    email: "deepthi@gmail.com",
  },
];
function MuiTable() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((data) => (
            <TableRow key={data.id}>
              <TableCell>{data.id}</TableCell>
              <TableCell>{data.firstName}</TableCell>
              <TableCell>{data.lastName}</TableCell>
              <TableCell align="center">{data.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default MuiTable;
