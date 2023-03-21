import React from 'react';
import DemoComp from '@/components/DemoComp';
import { withRouter } from 'next/router';

const Demo = (props) => {
  const { router } = props
  /** state部分 **/

  /** effect部分 **/

  /** methods部分 **/
  console.log(router.query)

  /** render **/
  return (
    <div>
      <button>Btn</button>
      <DemoComp children={"Hello NextJs"}></DemoComp>
    </div>
  );
};

export default withRouter(Demo);