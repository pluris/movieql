import { GraphQLServer, GraphQlServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers
});


server.start(() => console.log("Server is running on http://localhost:4000"));


console.log("Hello World");