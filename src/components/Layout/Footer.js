import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import classes from "./Footer.module.css";

const Footer = () => {
  const { school_name } = useSelector((state) => state.user.user);
  return (
    <div className={classes.footer}>
      {/* <div className={classes.content}> */}
      <Container className={classes.footerCopyright}>
        <Row>
          <Col xs={10} className={classes.alignment}>
            <div>
              {school_name && (
                <a
                  href="www.alllearn.in"
                  target="_blank"
                  className={classes.copyrightText}
                >
                  &copy;&nbsp;{school_name} powered by AllLearn Solutions
                  Private Limited
                </a>
              )}
            </div>
          </Col>
          <Col xs={2}>
            <span className={classes.pullRight}>1.3.7 Beta</span>
          </Col>
        </Row>
        {/* <div className={classes.footerCopyright}>
          <div>
            <a
              href="www.alllearn.in"
              target="_blank"
              className={classes.copyrightText}
            >
              &copy;&nbsp;Dummy Public School powered by AllLearn Solutions
              Private Limited
            </a>
          </div>
          <span className={classes.pullRight}>1.3.7 Beta</span>
        </div> */}
      </Container>
      {/* </div> */}
    </div>
  );
};

export default Footer;
