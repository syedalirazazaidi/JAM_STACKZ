// import React from "react"
// import { StaticQuery, graphql, navigate } from "gatsby"

// const ComponentName = () => (
//   <StaticQuery
//     query={graphql`
//       {
//         blog: allContentfulPost(
//           limit: 1
//           sort: { fields: [createdAt], order: DESC }
//         ) {
//           edges {
//             node {
//               title
//               subtitle
//               author
//               slug
//               id
//               image {
//                 fluid(maxWidth: 1200, quality: 85) {
//                   src
//                   ...GatsbyContentfulFluid
//                 }
//               }
//             }
//           }
//         }
//       }
//     `}
//     render={data => <pre>{JSON.stringify(data, null, 4)}</pre>}
//   ></StaticQuery>
// )

// export default ComponentName
