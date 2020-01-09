import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import '../components/all.sass'
import Layout from '../components/Layout'


export const IndexPageTemplate = ({
}) => (
  <div className='isIndex'>
    <div className='row'>
      <div>
        <p class='landing'>Tree planting and brushing in BC’s Southern Interior</p>
      </div>
    </div>
    <div className='row'>
      <div>
        <p class='landing'>Contracting since 2005. Based in Enderby, BC.</p>
      </div>
    </div>
    <div className='row'>
      <div class='buttonLanding'>
        <Link to="/employment">
          <button class="button is-large is-success">Plant with us</button>
        </Link>
      </div>
    </div>
  </div>
)

const IndexPage = () => {
  return (
    <Layout>
      <IndexPageTemplate/>
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage