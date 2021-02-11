import React from 'react'
import { Helmet } from 'react-helmet'
import { withPrefix } from 'gatsby'

const Head = () => {
    return (
        <Helmet title="Choice - Online Store Demo">
            <script src={withPrefix('app.js')} type="text/javascript" />
        </Helmet>
    )
}

export default Head