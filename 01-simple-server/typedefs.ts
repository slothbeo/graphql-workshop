const typeDefs = /* GraphQL */ `

type MultiplyResponse {
    greeting: String
    num: Float
}

type DivideResponse {
    greeting: String
    num: Float
}

type Query {
    sum2(a: Int!, b: Int!): Int!
    helloWorld: String!
    hello(name: String!): String!
    minus(a: Int!, b: Int!): Int!

    multiply(x: Float, y: Float): MultiplyResponse
    divide(x: Float, y: Float): DivideResponse
}
`;

export { typeDefs };
