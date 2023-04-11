import { useContext } from "react";
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

const Assembler = () => {
  const { user } = useContext(AuthContext);
  let routes = [
    {
      route: RouteConstants.LOGIN,
      component: <Login />,
      access: RoleConstants.ALL,
    },
    {
      route: RouteConstants.PROFILE_PAGE,
      component: <Profile />,
      access: RoleConstants.ALL,
    },
    {
      route: RouteConstants.LANDING_PAGE,
      component: <LandingPage />,
      access: RoleConstants.ALL,
    },
    {
      route: RouteConstants.HOME_PAGE,
      component: user.auth ? <Home /> : <Home />, // Home : Login
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
      component: <Messaging />,
      access: RoleConstants.EMPLOYEE,
    },
    {
      route: RouteConstants.POST_JOB,
      component: <PostJob />,
      access: RoleConstants.EMPLOYEE,
    },
  ];
  return (
    <div>
      {user.auth ? <Header /> : <BasicHeader />}
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
