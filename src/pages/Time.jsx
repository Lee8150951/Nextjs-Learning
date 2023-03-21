import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const Demo = dynamic(import('@/components/DemoComp'));

const Time = (props) => {
  /** state部分 **/
  const [time, setTime] = useState(Date.now());

  /** effect部分 **/

  /** methods部分 **/
  const changeTime = async () => {
    const moment = await import('moment');
    setTime(moment.default(Date.now()).format())
  }

  /** render **/
  return (
    <>
      <button onClick={changeTime}>改变时间</button>
      <Demo children={1}/>
    </>
  );
};

export default Time;