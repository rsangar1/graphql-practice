import { buildSchema } from "graphql";

const schema = buildSchema(`

    type Product{
        id: ID
        name: String
        description: String
        price: Float
        soldOut: Boolean
        stores: [Store]!
    }

    type Store {
        store: String
        id: ID
    }

    type Query {
        getProduct(id: ID)
    }

    input StoreInput {
        store: String
        id: ID
    }

    input ProductInput {
        id: ID
        name: String
        description: String
        price: Float
        soldOut: Boolean
        stores: [StoreInput]!
    }

    type Mutation {
        createProduct(input: ProductInput): Product
    }
`)

export default schema;