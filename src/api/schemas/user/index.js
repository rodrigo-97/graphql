const resolvers = require('../../resolvers')

const { makeExecutableSchema } = require('graphql-tools')


const userAttr = `
    id: ID
    name: String!
    email: String!
    password: String!
`

const typeDefs = `
    type User {
        ${userAttr}
    }

    type Query {
        getUser(id: ID!): User
        getUsers: [User]
    }

    input UserInput {
        ${userAttr}
    }

    type Mutation {
        createUser (input: UserInput): User
    }
`

module.exports = makeExecutableSchema({ typeDefs, resolvers })