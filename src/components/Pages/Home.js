import Filter from "../UI/Filter";
import classes from "./Home.module.css";
import Job from "../JobContent/Job";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../UI/Input";
import fetchCardData from "../store/card-actions";
import { Row, Container, Col } from "react-bootstrap";

const Homes = () => {
  const [selectedJobTerms, setSelectedJobTerms] = useState("All");
  const [selectedJobType, setSelectedJobType] = useState("All");
  const [searchValue, setSearchValue] = useState("");
  const items = useSelector((state) => state.card.items);
  const [filteredState, setFilteredState] = useState([]);
  const [searchFilteredState, setSearchFilteredState] = useState([]);

  const [checkSearch, setCheckSearch] = useState(false);
  const [isLoading, setIsloading] = useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    setIsloading(true);
    dispatch(fetchCardData());
    setIsloading(false);
  }, [dispatch]);

  const filterValues = () => {
    setCheckSearch(false);
    const jobType = selectedJobType;
    const jobTerms = selectedJobTerms;
    let filteredStateArray = [];
    if (jobType !== "All" && jobTerms === "All") {
      filteredStateArray = items.filter((item) => item.job_type === jobType);
    } else if (jobType && jobType !== "All" && jobTerms && jobTerms !== "All") {
      console.log("not All");
      filteredStateArray = items.filter(
        (item) => item.job_type === jobType && item.term === jobTerms
      );
    } else if (jobType === "All" && jobTerms !== "All") {
      filteredStateArray = items.filter((item) => item.term === jobTerms);
    } else if (jobType === "All" && jobTerms === "All") {
      console.log("items", items);
      filteredStateArray = items;
    }
    setFilteredState(filteredStateArray);
  };

  useEffect(() => {
    setFilteredState(items);
    // setSearchValue(items);
  }, [items]);

  const onSearchHandler = () => {
    setCheckSearch(true);
    let filteredData = [];
    if (searchValue) {
      filteredData = items.filter((item) =>
        item.school_name.toUpperCase().includes(searchValue.toUpperCase())
      );
    } else {
      filteredData = items;
    }
    setSearchFilteredState(filteredData);
  };
  useEffect(() => {
    setSearchFilteredState(items);
  }, [items]);

  return (
    <Container className={classes.container}>
      <Row>
        <Col sm={3}>
          <h3 className={classes.heading}>Open Jobs</h3>
          <Filter
            setSelectedJobTerms={setSelectedJobTerms}
            setSelectedJobType={setSelectedJobType}
            filterValues={filterValues}
          />
        </Col>
        <Col sm={9}>
          <div className={classes.searchBar}>
            <Input
              placeHolder="Search school name"
              searchHandler={onSearchHandler}
              setSearchValue={setSearchValue}
            />
          </div>
          <div className={classes.schoolCard}>
            <Job
              filteredState={filteredState}
              searchFilteredState={searchFilteredState}
              checkSearch={checkSearch}
              isLoading={isLoading}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Homes;
