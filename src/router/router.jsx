import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from "react-router-dom";

import Header from '../components/assets/header/header.jsx';
import Footer from '../components/assets/footer/footer.jsx';
import Main from '../pages/main/main.jsx';
import About from '../pages/about/about.jsx';
import NewsList from '../pages/news/newslist/newslist.jsx';
import News from "../pages/news/news.jsx";

const Router = () => {
function Layout() {
  return (
      <>
        <Header />
        <Outlet />
        <Footer />
        <ScrollRestoration />
      </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout/>,
    //errorElement: <ErrorPage />,
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
        path: '/news',
        element: <News />
      }
    ]
  }
])

return <RouterProvider router={router} />
}

export default Router;