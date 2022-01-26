# Data Bases

## DBMS

### Database management system.

Characteristics

* Real-world entity: Uses more realistic real-world entities to design it's architecture. Ie: students w/ age etc.
* Relation-based tabled: Allows entities to have relations and form tables.
* Isolation of data and application: DBMS stores meta data, data about it's data, to ease it's processing.
* Less redundancy: DBMS follows **rules of normalization**, splitting a relation when it's attributes have redundancy.
* Consistency: DBMS has greater consistency than earlier forms of data storing.
* Query Language: It is equiped with a query language.
* ACID Properties: Atomicity, Consistency, Isolation, Durability.
* Multiuser and Concurrent Access: The user in unaware when other users are accessing the same data.
* Multiple Views: User have a concrete view of the database according t their requirement. A sales accosciate and a developer will have different views.
* Security: It's hard to break into the code and keeping people segmented to their own area of isolation helps keep it secure.

### Tutorial

This area was particularly dense. I learned that square brackets can be used to set attributes to properties.
ie.
[StringLength(50)]
public string LastName {get; set;}
^ Make is so that a user may only put in 50 chars while inputing their user name. Handy.

What is a Schema: A blueprint. We use them to keep our data organized.

What is a primary key? A primary key allows each record in a table t obe uniquely identified. Ther can be only one primary key per table.

What is a foreign key? A column that comes from a different table.

What is a composite key? A candidate key that consists of two or more attributes that together uniquely identity an entity occurence.

Relationships: Each element dj is a member of Dj, a data domain.
