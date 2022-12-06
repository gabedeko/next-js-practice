import React from 'react'

import headerStyles from '../styles/Header.module.css'

const Header = () => {
    const x = 5;
  return (
    <div>
        <h1 className="title"><span>This is</span> Next.js</h1>
        <style jsx>
            {`
            .title > span {
                color: ${x > 3 ? '#36827F' : '#13C4A3'};
            }
            `}
        </style>
        <p>We will use Next.js to build cool apps.</p>
    </div>
  )
}

export default Header