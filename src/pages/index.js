import React from 'react'
import _ from 'lodash'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import MediumPostList from '../components/medium-components/mediumPostList';
import Button from '../components/atoms/Buttons'

// Host Google Fonts locally
require('typeface-ubuntu');
require('typeface-lato');

const IndexPage = ({data}) => {

  const { allMediumPost } = data;
  const { group } = allMediumPost;

  let mediumCaPosts = _.first(group, (edges) => {
     return edges;
  });

  let mediumPosts = _.map(mediumCaPosts, (post, index) => {
    return <MediumPostList key = {{ index }} posts = {{ post }} />
  });

  return (
    <Layout>
      <h1>Hello world</h1>

      <Link to = "/page-2/" >Go to page 2</Link>
      <hr />
      <Button type = 'secondary' button_text = 'Test button' />

      { mediumPosts }
    </Layout>
  );

}

export default IndexPage

export const mediumQuery = graphql `
    query mediumPosts {
    allMediumPost {
      group(field: homeCollectionId ) {
        edges {
          node {
            id
            title
            createdAt
            uniqueSlug
          }
        }
      }
    }
  }
`;