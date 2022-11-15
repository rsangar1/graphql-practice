import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Product {
        id: ID
        name: String
        description: String
        price: Float
        soldout: Soldout
        stores: [Store]!
        inventory: Int
    }

    enum Soldout {
        SOLDOUT
        ONSALE
    }

    type Store {
        store: String
    }

    type Query {
        getProduct(id: ID): Product
    }

    input StoreInput {
        store: String
    }

    input ProductInput {
        id: ID
        name: String
        description: String
        price: Float
        soldout: Soldout
        stores: [StoreInput]!
        inventory: Int
    }

    type Mutation {
        createProduct(input: ProductInput): Product
    }
`)

export default schema;
