import GAListener from 'components/GAListener';
import { EmptyLayout, LayoutRoute, MainLayout } from 'components/Layout';
import PageSpinner from 'components/PageSpinner';
import AuthPage from 'pages/AuthPage';
import React, {useState, useEffect} from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import './styles/reduction.scss';

import AuthRoute from './utils/AuthRoute'
import ReportPage from './pages/ReportPage';

const DashboardPage = React.lazy(() => import('pages/DashboardPage'));
const FormPage = React.lazy(() => import('pages/FormPage'));
const ModalPage = React.lazy(() => import('pages/ModalPage'));
const ProgressPage = React.lazy(() => import('pages/ProgressPage'));
const TablePage = React.lazy(() => import('pages/TablePage'));
const WidgetPage = React.lazy(() => import('pages/WidgetPage'));

const QuestionsPage = React.lazy(() => import('pages/QuestionsPage'))

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

const App = (props) => {

  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    const user = window.sessionStorage.getItem("user")
    if(user !== null){
      setIsLogin(true)
    }
  }, [])

  const changeLayoutRoute = isLogin === true ? "" : (
    <LayoutRoute
      exact
      path="/"
      layout={EmptyLayout}
      component={props => (
        <AuthPage {...props} setIsLogin={setIsLogin}  />
      )}
    />
  )
  
  return (
      <BrowserRouter basename={getBasename()}>
        <GAListener>
          <Switch>
            {changeLayoutRoute}
                

            <MainLayout breakpoint={props.breakpoint}>
              <React.Suspense fallback={<PageSpinner />}>
                <AuthRoute exact authenticated={isLogin} path="/" component={DashboardPage} />
                <AuthRoute exact authenticated={isLogin} path="/widgets" component={WidgetPage} />
                <AuthRoute exact authenticated={isLogin} path="/tables" component={TablePage} />
                <AuthRoute exact authenticated={isLogin} path="/questions" component={QuestionsPage} />
                <AuthRoute exact authenticated={isLogin} path="/progress" component={ProgressPage} />
                <AuthRoute exact authenticated={isLogin} path="/modals" component={ModalPage} />
                <AuthRoute exact authenticated={isLogin} path="/forms" component={FormPage} />

                <AuthRoute exact authenticated={isLogin} path="/question_processing" render={() => <QuestionsPage qsType="processing" />} />
                <AuthRoute exact authenticated={isLogin} path="/question_completion" render={() => <QuestionsPage qsType="completion" />} />
                <AuthRoute exact authenticated={isLogin} path="/report_board"  render={() => <ReportPage qsType="board" />} />
                <AuthRoute exact authenticated={isLogin} path="/report_comment" render={() => <ReportPage qsType="comment" />} />
              </React.Suspense>
            </MainLayout>
            <Redirect to="/" />
          </Switch>
        </GAListener>
      </BrowserRouter>
  );

}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default componentQueries(query)(App);
