import { Col, Container, Row } from "react-bootstrap";
import classes from "./Profile.module.css";
import { React } from "react";
import { useSelector } from "react-redux";

function Profile() {
  const profileData = useSelector((state) => state.profile);
  console.log("inside Profile");
  console.log(profileData.profile);
  const profile = profileData.profile;
  return (
    <div>
      <Container className={classes.container}>
        <Row>
          <Col xs={10} className={classes.colplacement}>
            <div className={classes.headingBar}>
              <h3 className={classes.heading}>Profile</h3>
            </div>
          </Col>
          <Row className={classes.colplacement}>
            <Col xs={4}>
              {profile.user_avatar ? (
                <img
                  src={profile.user_avatar}
                  alt="profile pic"
                  className={classes.profileImg}
                />
              ) : (
                <img
                  src="https://alllearndatabucketv2.s3.ap-south-1.amazonaws.com/defaultAvatar.png"
                  alt="profile pic"
                  className={classes.profileImg}
                />
              )}

              <h4 className={classes.profileName}>{profile.user_name}</h4>
              <table>
                <tbody>
                  {profile.phone && (
                    <tr>
                      <td className={classes.td}>Phone</td>
                      <td className={classes.td}>{profile.phone}</td>
                    </tr>
                  )}

                  <tr>
                    <td className={classes.td}>Email</td>
                    <td className={classes.td}>{profile.email}</td>
                  </tr>
                  {profile.registration_date && (
                    <tr>
                      <td className={classes.td}>Registered On</td>
                      <td className={classes.td}>
                        {profile.registration_date}
                      </td>
                    </tr>
                  )}

                  <tr>
                    <td className={classes.td}>Testing Preference</td>
                    <td className={classes.td}>
                      {profile.device_preference === 195 && (
                        <span>External Web Camera(eg. PC + Mobile)</span>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.td}>School Id</td>
                    <td className={classes.td}>{profile.school_id}</td>
                  </tr>
                </tbody>
              </table>
            </Col>
            <Col xs={6}>
              <div className={classes.section}>
                <h3 className={classes.subHeading}>About</h3>
                <span className={classes.details}>{profile.about_me}</span>
              </div>
              <div className={classes.section}>
                <h3 className={classes.subHeading}>Education</h3>
                <span className={classes.details}>{profile.education}</span>
              </div>
              <div className={classes.section}>
                <h3 className={classes.subHeading}>Experience</h3>
                <span className={classes.details}>{profile.experience}</span>
              </div>
              <div className={classes.section}>
                <h3 className={classes.subHeading}>Class Subject Allocation</h3>
                <span className={classes.details}></span>
              </div>
              <div className={classes.section}>
                <h3 className={classes.subHeading}>Access Requests</h3>
                <span className={classes.details}></span>
              </div>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
}

export default Profile;
