import React, { useState } from 'react'

function Tabs() {

    const [id, setId] = useState(0)

  return (
    <div className='tabs-container'>
        <div className="tabs-head-container">
            <div className="tabs-head" onClick={() => {setId(0)}}><p>head1 </p></div>
            <div className="tabs-head" onClick={() => {setId(1)}}><p>head2 </p></div>
            <div className="tabs-head" onClick={() => {setId(2)}}><p>head3 </p></div>
        </div>
        <div className="tabs-body-container">
            <div className="tabs-body" hidden={id !== 0}>
                <h2>{id + 1}. Content</h2>
                <h4>Emirhan</h4>
                <h5>3141 - Saturday</h5>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quasi recusandae ipsum necessitatibus, omnis magnam beatae
                    eum possimus rem quidem eos illo dolorum sint et quam a quae nemo
                </p>
            </div>
            <div className="tabs-body" hidden={id !== 1}>
            <h2>{id + 1}. Content</h2>
            <h4>Polat</h4>
            <h5>5926 - Sunday</h5>
                <p>
                    debitis alias enim fugiat aperiam voluptates. Saepe voluptas placeat unde modi?
                    Neque beatae soluta cumque sequi, temporibus iste ab saepe eaque minima tempora
                    fugit est assumenda eos
                </p>
            </div>
            <div className="tabs-body" hidden={id !==2}>
            <h2>{id + 1}. Content</h2>
            <h4>Cihangir</h4>
            <h5>5358 - Monday</h5>
                <p>
                    molestias nemo quo harum. Doloremque eos sed eaque, asperiores aspernatur suscipit labore cum ut.
                    Sunt minima eligendi quidem, temporibus vitae quis id harum eius necessitatibus aperiam
                </p>
            </div>
        </div>
    </div>
  )
}
export default Tabs