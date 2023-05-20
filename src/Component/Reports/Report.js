import data from "../../data/data";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Barchart from "../chart/chart";
const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const TAX_RATE = 0.18;

function gettotalamount(obj) {
  const amountByMonth = obj.reduce((acc, item) => {
    const month = item.date.getMonth();
    const year = item.date.getFullYear();
    const key = month;
    const iskey = acc.find((each) => each.date === key);

    if (!iskey) {
      acc.push({
        year: year,
        date: key,
        limit: 50000,
        name: item.name,
        amount: item.amount || 0,
      });
      return acc;
    }

    iskey.amount += item.amount || 0;
    return acc;
  }, []);

  return amountByMonth;
}

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function total(items) {
  return items.reduce((sum, { amount }) => sum + amount, 0);
}

export default function ViewReports() {
  gettotalamount(data);
  let totaldata = gettotalamount(data) || [];

  const invoiceSubtotal = total(totaldata);
  const invoiceTaxes = TAX_RATE * invoiceSubtotal;
  const invoiceTotal = invoiceTaxes + invoiceSubtotal;
  const size = { fontSize: { xs: 13, sm: 20 }, fontWeight: "bold" };
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ mixWidth: 600 }} aria-label="spanning table">
          <TableHead>
            <TableRow sx={{ fontSize: 20, fontWeight: "bold" }}>
              <TableCell
                align="center"
                colSpan={3}
                sx={{ fontSize: 20, fontWeight: "bold" }}
              >
                Details
              </TableCell>
              <TableCell
                align="right"
                sx={{ fontSize: 20, fontWeight: "bold" }}
              >
                Price
              </TableCell>
            </TableRow>
            <TableRow sx={{ background: "pink", size: "medium" }}>
              <TableCell sx={size}>Date</TableCell>
              <TableCell sx={size} align="right">
                Name
              </TableCell>
              <TableCell sx={size} align="right">
                {" "}
                Monthly limit
              </TableCell>
              <TableCell sx={size} align="right">
                Amount
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {totaldata.map((each, index) => (
              <TableRow key={index}>
                {/* <TableCell>{each.date}</TableCell> */}
                {/* {console.log(each.date)} */}
                <TableCell>
                  {labels[each.date] ? labels[each.date] : "January"}-
                  {each.year}
                </TableCell>
                <TableCell align="right">{each.name}</TableCell>
                <TableCell align="right">{each.limit}</TableCell>
                <TableCell align="right">{each.amount}</TableCell>
                {/* <TableCell align="right">{ccyFormat(row.price)}</TableCell> */}
              </TableRow>
            ))}

            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={2}>Subtotal</TableCell>
              <TableCell align="right">{total(totaldata)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Tax</TableCell>
              <TableCell align="right">{`${(TAX_RATE * 100).toFixed(
                0
              )} %`}</TableCell>
              <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Barchart totalarr={totaldata}></Barchart>
      <br />
      <br />
      <br />
    </>
  );
}
