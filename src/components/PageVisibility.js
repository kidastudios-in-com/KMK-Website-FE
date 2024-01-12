import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AuthContext from './AuthContext';

const PageVisibility = ({ children }) => {
  const [isPageVisible, setIsPageVisible] = useState(true);
  const router = useRouter();
  const { isLoggedIn } = useContext(AuthContext);

  const handleVisibilityChange = () => {
    const isVisible = !document.hidden;
    setIsPageVisible(isVisible);

    if (isVisible && isLoggedIn) {
      // Page is in focus and the user is logged in, trigger a reload
      window.location.reload();
    }
  };

  useEffect(() => {
    const visibilityHandler = () => {
      handleVisibilityChange();
    };

    // Event listener for visibility change
    document.addEventListener('visibilitychange', visibilityHandler);

    // Cleanup on component unmount
    return () => {
      document.removeEventListener('visibilitychange', visibilityHandler);
    };
  }, []);

//   useEffect(() => {
//     // If you want to do something specific when the route changes,
//     // you can handle it here using the router events.

//     const handleRouteChange = () => {
//       // Your logic for route change
//     };

//     router.events.on('routeChangeStart', handleRouteChange);

//     return () => {
//       router.events.off('routeChangeStart', handleRouteChange);
//     };
//   }, [router]);

  return <>{children(isPageVisible)}</>;
};

export default PageVisibility;
