import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import {Animated} from "react-animated-css";

require('../components/animate.css');

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>
        <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
	<h1>My Products</h1> 
</Animated>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {data.allBigCommerceProducts.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.name}</td>
                <td>
                  <div
                    dangerouslySetInnerHTML={{ __html: node.description }}
                  ></div>
                </td>
                <td>
		<Animated animationIn="zoomInUp" animationOut="fadeOut" isVisible={true}>
                  {node.images.map(({ url_standard, description }, index) => (
                    <img key={index} alt={description} src={url_standard} />
                  ))}
</Animated>
                </td>
                <td>{node.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query {
    allBigCommerceProducts {
      edges {
        node {
          description
          name
          price
	  images{
	  	description
		url_standard
	}
        }
      }
    }
  }
`
