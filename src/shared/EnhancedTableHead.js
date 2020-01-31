import React from "react";
import PropTypes from "prop-types";
import {
  Typography,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

const styles = {
  tableSortLabel: {
    cursor: "text",
    userSelect: "auto",
    color: "inherit !important"
  },
  noPointerEvents: {
    pointerEvents: "none"
  }
};

function EnhancedTableHead(props) {
  const { order, orderBy, rows, onRequestSort, classes } = props;

  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {rows.map((row, index) => (
          <TableCell
            key={index}
            align={row.numeric ? "right" : "inherit"}
            padding="default"
            sortDirection={orderBy === row.name ? order : false}
            className={index === 0 ? "pl-3" : null}
          >
            {onRequestSort ? (
              <Tooltip
                title="Sort"
                placement={row.numeric ? "bottom-end" : "bottom-start"}
                enterDelay={300}
              >
                <TableSortLabel
                  active={orderBy === row.id}
                  direction={order}
                  onClick={createSortHandler(row.id)}
                >
                  <Typography variant="body2">{row.label}</Typography>
                </TableSortLabel>
              </Tooltip>
            ) : (
              <TableSortLabel
                className={classNames(
                  classes.tableSortLabel,
                  classes.noPointerEvents
                )}
              >
                <Typography variant="body2">{row.label}</Typography>
              </TableSortLabel>
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func,
  order: PropTypes.string,
  orderBy: PropTypes.string,
  rows: PropTypes.array,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EnhancedTableHead);