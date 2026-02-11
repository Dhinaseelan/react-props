import React, { useEffect, useState } from 'react';
import useFetch from './useFetch';
import User from './User';

function Courcelist() {
  const [Courcelist1, error] = useFetch('http://localhost:3000/Courcelist1');
  const [list, setList] = useState([]);

  // update list only when Courcelist1 changes
  useEffect(() => {
    if (Courcelist1) {
      setList(Courcelist1);
    }
  }, [Courcelist1]);

  function deleteCourse(id) {
    const deleted = list.filter((a) => a.id !== id);
    setList(deleted);
  }

  if (!Courcelist1) {
    return (
      <>
        {!error && <h1 style={{ color: 'black' }}>Loading...</h1>}
        {error && <p style={{ color: 'black' }}>{error}</p>}
      </>
    );
  }

  const courseList = list.map((val) => (
    <User
      key={val.id}
      img={val.img}
      price={val.price}
      title={val.title}
      display={val.display}
      rating={val.rating}
      id={val.id}
      delfun={deleteCourse}
    />
  ));

  return <>{courseList}</>;
}

export default Courcelist;