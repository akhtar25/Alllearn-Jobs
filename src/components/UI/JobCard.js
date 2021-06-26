import { Card } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
// import CardActions from "@material-ui/core/CardActions";
import { Fragment } from "react";

const JobCard = (props) => {
  return (
    <Fragment>
      <Card>
        <CardContent>{props.children}</CardContent>
        {/* <CardActions>
          <button>Submit</button>
        </CardActions> */}
      </Card>
    </Fragment>
  );
};

export default JobCard;
