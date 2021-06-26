import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import classesMain from "./JobTrackingTable.module.css";

const columns = [
  {
    id: "posted_on",
    label: "Posted On",
    minWidth: 100,
    fontSize: 10,
    fontWeight: "bold",
  },
  {
    id: "subject",
    label: "Subjects",
    minWidth: 100,
    fontSize: 10,
    fontWeight: "bold",
  },
  {
    id: "classes",
    label: "Classes",
    minWidth: 150,
    fontSize: 10,
    fontWeight: "bold",
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "category",
    label: "Category",
    minWidth: 120,
    fontSize: 10,
    fontWeight: "bold",
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "status",
    label: "Status",
    minWidth: 100,
    fontSize: 10,
    fontWeight: "bold",
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "term",
    label: "Term Duration",
    minWidth: 150,
    fontSize: 10,
    fontWeight: "bold",
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "details",
    label: "Details",
    minWidth: 100,
    fontSize: 10,
    fontWeight: "bold",
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "see_applications",
    label: "See\u00a0Applications",
    minWidth: 153,
    fontSize: 10,
    fontWeight: "bold",
    align: "left",
    format: (value) => value.toFixed(2),
  },
];

// function createData(name, code, population, size) {
//   const density = population / size;
//   return { name, code, population, size, density };
// }

const rows = [];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

export default function JobTrackingTable(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const trackingListData = props.listData;
  console.log(trackingListData);

  const fetchDate = (postedDate) => {
    const date = new Date(postedDate);
    return date;
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    fontSize: column.fontSize,
                    fontWeight: column.fontWeight,
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {trackingListData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                const link = "/jobDetails/" + row.job_id + "/" + row.school_id;
                const jobApplicationLink = "/jobApplications/" + row.job_id;
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{
                            minWidth: column.minWidth,
                            fontSize: column.fontSize,
                          }}
                        >
                          {column.id === "details" && (
                            <NavLink to={link} className={classesMain.btnLink}>
                              Details
                            </NavLink>
                          )}
                          {column.id === "see_applications" && (
                            <NavLink
                              to={jobApplicationLink}
                              className={classesMain.btnJobLink}
                            >
                              <Button
                                variant="success"
                                className={classesMain.btn}
                              >
                                see applications
                              </Button>
                            </NavLink>
                          )}
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : column.id === "posted_on"
                            ? fetchDate(value).toDateString()
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
