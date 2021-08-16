# LINQ

## Language Integrated Query (LINQ) (C#)

* Query expressions can be used to query and to transform data from any LINQ-enabled data source.
* Query expressions use many familiar C# language constructs.
* The variables in a query expression are strongly typed, but you do not have to provide the type explicitly.
* A query is not executed until you iterate over the query variable in a foreach.
* At compile time, query expressions are converted.
* As a rule, use query syntax whenver possible when writing LINQ queries.

## Introductoin to LINQ Queries(C#)

All LINQ Query opertionas consits of three actions

1. Obtain the data source.
2. Create the query.
3. Execute the query.

### The Query

**Specifices** what information to retrieve from the data source.

### Query Execution

Several types

* Deferred Execution
* Forcing Immediate Execution

## Basic LINQ Query Operations (C#)

### Obtaining a data source

* Specify query.

### Filtering 

**AND** & **OR** can be used to string together filter expressions.

### Ordering

The **orderby** clause can help elements be returned in sequence.

### Grouping

The **group** clause enables you  ogroup your results based on a key that you specify.