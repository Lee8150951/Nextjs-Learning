import React from 'react';
import axios from 'axios';

const Player = (props) => {
  let { player } = props;
  /** state部分 **/

  /** effect部分 **/

  /** methods部分 **/

  /** render **/
  return (
    <div>
      <div>{player}</div>
    </div>
  );
};

export async function getStaticPaths() {
  const res = await axios.get('http://localhost:8000/players');
  const players = res.data;

  const paths = players.map((player) => ({
    params: {id: player.id}
  }));

  return { paths, fallback: false }
}

export async function getStaticProps(props) {
  let { params } = props;
  const res = await axios.get(`http://localhost:8100/${params.id}`);
  const player = JSON.stringify(res.data);
  return {
    props: {
      player
    }
  }
}

export default Player;