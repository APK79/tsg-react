import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from "react-router-dom";

import Header from '../components/assets/header/header.jsx';
import Footer from '../components/assets/footer/footer.jsx';
import Main from '../pages/main/main.jsx';
import About from '../pages/about/about.jsx';
import NewsList from '../pages/news/newslist/newslist.jsx';
import News from "../pages/news/news.jsx";
import ErrorPage from "../pages/errorpage/errorpage.jsx";

const Router = () => {
function Layout() {
  return (
    <div className="App">
        <Header />
        <Outlet />
        <Footer />
        <ScrollRestoration />
      </div>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout/>,
    errorElement: <ErrorPage />,
    children: [  
      {
        path: '/',
        element: <Main />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/newslist',
        element: <NewsList />
      },
      {
        path: '/news/:id',
        element: <News />
      }
    ]
  }
])

return <RouterProvider router={router} />
}

export default Router;