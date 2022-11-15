import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from './data/schema';
import resolvers from './data/resolvers';

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to GraphQL')
});

const root =  resolvers;

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(8084, () => console.log('Running GraphQL server on localhost:8084/graphql'));
