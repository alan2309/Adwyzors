import { useContext, useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import BasicHeader from "./components/commonComp/Header/BasicHeader";
import Header from "./components/commonComp/Header/Header";
import RoleConstants from "./constants/RoleConstants";
import RouteConstants from "./constants/RouteConstants";
import { AuthContext } from "./context/AuthContext";
import Home from "./pages/common/Home";
import LandingPage from "./pages/common/LandingPage/LandingPage";
import Messaging from "./pages/common/Messaging";
import Signup from "./pages/common/SignUp/Signup";
import Login from "./pages/common/login/Login";
import Profile from "./pages/common/Profile/Profile";
import PostJob from "./pages/company/postjob/PostJob";
import Job from "./pages/common/Job/Job";
import EmployeeNotification from "./pages/employee/Notification/EmployeeNotification";
import AdminNotification from "./pages/admin/Notification/AdminNotification";

const Assembler = () => {
  const { user } = useContext(AuthContext);
  const [section, setSection] = useState(0);

  const changeSection = (id) => {
    setSection(id);
  };
  let routes = [
    {
      route: RouteConstants.LOGIN,
      component: <Login />,
      access: RoleConstants.ALL,
    },
    {
      route: RouteConstants.ADMIN_NOTIFICATION_PAGE,
      component: <AdminNotification changeSection={changeSection} />,
      access: RoleConstants.ALL,
    },
    {
      route: RouteConstants.NOTIFICATION_PAGE,
      component: <EmployeeNotification changeSection={changeSection} />,
      access: RoleConstants.ALL,
    },
    {
      route: RouteConstants.LANDING_PAGE,
      component: <LandingPage />,
      access: RoleConstants.ALL,
    },
    {
      route: RouteConstants.HOME_PAGE,
      component: user.auth ? <Home changeSection={changeSection} /> : <Login />, // Home : Login
      access: RoleConstants.ALL,
    },
    {
      route: RouteConstants.SIGNUP,
      component: user.auth ? (
        <Navigate to={RouteConstants.LANDING_PAGE} />
      ) : (
        <Signup />
      ),
      access: RoleConstants.NONE,
    },
    {
      route: RouteConstants.MESSAGING_PAGE,
      component: <Messaging changeSection={changeSection} />,
      access: RoleConstants.EMPLOYEE,
    },
    {
      route: RouteConstants.JOBS_EMPLOYEE,
      component: <Job changeSection={changeSection} />,
      access: RoleConstants.EMPLOYEE,
    },
    {
      route: RouteConstants.JOBS_COMPANY,
      component: <Job changeSection={changeSection} />,
      access: RoleConstants.COMPANY,
    },
    {
      route: RouteConstants.POST_JOB,
      component: <PostJob changeSection={changeSection} />,
      access: RoleConstants.COMPANY,
    },
    {
      route: RouteConstants.PROFILE_PAGE,
      component: <Profile changeSection={changeSection} />,
      access: RoleConstants.ALL,
    },
  ];
  return (
    <div>
      {user.auth ? (
        <Header section={section} changeSection={changeSection} />
      ) : (
        <BasicHeader />
      )}
      <Router>
        <Routes>
          {routes.map((route, key) => (
            <Route
              path={route.route}
              exact
              key={key}
              element={
                <ValidationComponent
                  access={route.access}
                  component={route.component}
                />
              }
            />
          ))}
          {/* do not change */}
          <Route
            path="*"
            element={
              <Row style={{ margin: "20px 0 0 0" }}>
                <Col style={{ padding: "10px 90px" }}>
                  <>
                    <h1>404 not found</h1>
                  </>
                </Col>
              </Row>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

let ValidationComponent = (props) => {
  const { user } = useContext(AuthContext);

  if (
    user.auth ||
    (props.access === RoleConstants.NONE &&
      user.userRole === RoleConstants.NONE) ||
    props.access === RoleConstants.ALL
  ) {
    if (
      user.userRole === props.access ||
      user.userRole === RoleConstants.ADMIN ||
      props.access === RoleConstants.ALL
    ) {
      return props.component;
    } else if (props.access !== "" && user.userRole !== props.access) {
      return <div>401 :Access Denied</div>;
      // return props.component;
    }
  } else {
    return (
      <Navigate
        to={RouteConstants.LOGIN + `?nextPage=${window.location.pathname}`}
      />
    );
  }
};

export default Assembler;
