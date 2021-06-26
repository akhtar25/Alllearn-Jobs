import JobItem from "./JobItem";
import classes from "./Job.module.css";
import Loader from "../UI/Loader";

const Job = (props) => {
  let items = [];
  if (props.checkSearch) {
    items = props.searchFilteredState;
  } else {
    items = props.filteredState;
  }
  console.log("props.isLoading", props.isLoading);

  const ulList = (
    <ul className={classes.unorderList}>
      {items.map((data) => {
        return (
          <JobItem
            key={data.job_id}
            img={data.school_picture}
            school_name={data.school_name}
            min_pay={data.min_pay}
            max_pay={data.max_pay}
            job_type={data.job_type}
            location={data.city}
            date={data.posted_on}
            subject={data.subject}
            jobTerm={data.term}
            category={data.category}
            id={data.job_id}
            job_id={data.job_id}
            school_id={data.school_id}
          />
        );
      })}
    </ul>
  );
  return (
    <section className={classes.job}>
      {props.isLoading && (
        <div className={classes.loading}>
          <Loader />
        </div>
      )}
      {!props.isLoading && ulList}
    </section>
  );
};

export default Job;
