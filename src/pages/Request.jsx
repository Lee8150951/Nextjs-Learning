import React, { useEffect } from 'react';
import axios from 'axios';

const Request = (props) => {
  console.log(props)
  /** state部分 **/

  /** effect部分 **/

  /** methods部分 **/

  /** render **/
  return (
    <div></div>
  );
};

export async function getStaticProps() {
  const res = await axios.get('http://localhost:8000/players');
  const plays = JSON.stringify(res.data);
  return {
    props: {
      plays
    }
  }
}

export default Request;