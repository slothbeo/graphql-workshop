const typeDefs = /* GraphQL */ `

type MultiplyResponse {
    greeting: String
    num: Float
}

type Query {
    sum2(a: Int!, b: Int!): Int!
    helloWorld: String!
    hello(name: String!): String!
    minus(a: Int!, b: Int!): Int!

    multiply(x: Float, y: Float): MultiplyResponse
}
`;

export { typeDefs };
