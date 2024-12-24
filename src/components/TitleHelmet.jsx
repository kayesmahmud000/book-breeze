import React from 'react';
import { Helmet } from 'react-helmet';

const TitleHelmet = ({title}) => {
    return (
        <div>
           <Helmet>
                <meta charSet="utf-8" />
                <title>{title} | Book Breeze</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet> 
        </div>
    );
};

export default TitleHelmet;