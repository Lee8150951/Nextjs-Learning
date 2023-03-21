import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Route = (props) => {
  const router = useRouter();
  /** state部分 **/

  /** effect部分 **/
  useEffect(() => {
    router.events.on('routeChangeStart', () => {console.log("OK")})
  }, []);

  /** methods部分 **/
  const handleRouteChange = (url, { shallow }) => {
    console.log(
      `App is changing to ${url} ${
        shallow ? 'with' : 'without'
      } shallow routing`
    )
  }

  const clickHandle_1 = () => {
    router.push('/');
  }
  const clickHandle_2 = () => {
    router.push({
      pathname: '/Demo',
      query: {
        name: 'next'
      }
    });
  }

  /** render **/
  return (
    <div>
      <Link href='/'>首页</Link>
      <Link href='/Demo'>Demo</Link>
      <button onClick={clickHandle_1}>首页</button>
      <Link href='/Demo?name=nextjs'>传参</Link>
      <button onClick={clickHandle_2}>首页</button>
    </div>
  );
};

export default Route;