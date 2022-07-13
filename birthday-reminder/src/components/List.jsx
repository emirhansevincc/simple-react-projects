import React from 'react'


function List({ birthday }) {

  return (
    <>
        {birthday.map((data) => {

            const { id, name, age } = data
            return <div key={id} className={'person'}>
                <div className='pic'></div>
                <h2>{name}</h2>
                <p>{age}</p>
            </div>

        })}
    </>
  )
}

export default List