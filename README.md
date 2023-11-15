# GraphQL Workshop

### Why it matters for Check Point engineer?

* control and query Check Point product with GraphQL API

* GraphQL is powering [*AppSec (Horizon Policy) API*](https://appsec-doc.inext.checkpoint.com/references/management-api) and it has [*GraphQL API Playground*](https://portal.checkpoint.com/dashboard/policy#/support/api/) in the portal

* more products are adopting GraphQL - e.g. Harmony Endpoint [*Threat Hunting*](https://sc1.checkpoint.com/documents/latest/ThAPIs/index.html)

* some CP products are using GraphQL and keep it internal (web UI for Harmony Endpoint)

* cloud native offerings exist inluding [AWS AppSync - serverless GraphQL APIs](https://aws.amazon.com/appsync/) and more...


### Goals
* proof your GraphQL knowledge with hands-on

* adopt relevant tools and workflows

* apply GraphQL on Check Point products


### Graphql recap
* is addressing some *efficiency* and *flexibility* challanges with REST

* roots in Facebook (powering Facebook mobile app), opensourced in 2015 and now owned by [*GraphQL Foundation*](https://graphql.org/foundation/)

* GraphQL roots are uncovered in GraphQL [documentary](https://www.youtube.com/watch?v=783ccP__No8)

* GraphQL is *query language for API with server-side runtime* processing your queries

* it is *typed* and based on schema written in SDL - *Schema Definition Language*

* *introspection* ("self documenting") - is enabling tooling e.g. GraphQL Playground

* *performance* aspect - addressing overfetching / underfetching

* it *gives caller flexibility* to specify format and contents of API response

* single API URL and HTTP method used (POST)

* AppSync enables real-time applications and server initiated events with [subscriptions](https://www.apollographql.com/docs/react/data/subscriptions/)

### GraphQL server - real world example

```bash
# open VScode terminal and run
cd /workspaces/graphql-workshop/01-simple-server
code NOTES.md
```