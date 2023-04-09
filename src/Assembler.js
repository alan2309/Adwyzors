import { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { AuthContext } from "./context/AuthContext";
import RouteConstants from "./constants/RouteConstants";
import RoleConstants from "./constants/RoleConstants";
import Login from "./pages/common/login/Login";
import Signup from "./pages/common/Signup";
import Home from "./pages/common/Home";
import Messaging from "./pages/common/Messaging";
import Header from "./components/commonComp/Header/Header";

const Assembler = () => {
  const { user } = useContext(AuthContext);
  let routes = [
    {
      route: RouteConstants.LOGIN,
      component: <Login />,
      access: RoleConstants.ALL,
    },
    {
      route: RouteConstants.LANDING_PAGE,
      component: user.auth ? <Home /> : <Login />,
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
  ];
  return (
    <div>
      <Header />
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
