import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'


const IndexPage = ({data}) => {
  const {
    page
  } = data

  const {
    title,
    meta
  } = page

  const seo = {
    ...meta,
    description: meta.description.description
  }

  console.log(page)
  
  return (
    <Layout {...{title,seo}}>
      <h1>{title}</h1>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  {
    page: contentfulPage(slug: {eq: "home"}) {
      title
      meta: seo {
        title
        description {
          description
        }
      }
    }
  }
`