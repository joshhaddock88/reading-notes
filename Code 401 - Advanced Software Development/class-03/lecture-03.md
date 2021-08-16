Memory look like a grid of squares.

Every time you store something it goes in a square (and incidently, is stored backwards on a desktop and forward on a phone).

If you have an array of data, to add something to it, you have to create a new one. Because all the elements have to be side by side for it to work.

If you have an array with 4 bits of data and you need to add data to it, now it is 5 bits. This could dislodge memory and create gaps. This is why you have to defragment.

Linked "List"

Head
 |>   (1) -> (7) -> (4) |
                Tail  <-

Node^ have a value
{Name: 1} -> next node
Head is the first Node in the list

```csharp
// (1) -> (2) -> (3)
current = LL.Head;
While(current) {
    print current.value // prints (1)
    current = current.next // = (2)
    //iterates again: prints (2)
    // current = current.next (3)
    //print current.value (3)
    // current = current.next NULL

}
```

This is a single linked list.

It's just ndoes connected to other nodes.

As an object

```csharp
LL {
    Head:
    {
        Value: 1
        Next: 
        {
            Value: 2
            Next:
            {
                Value: 3
                Next
            }
        }
    }
}
```

So it's just a highly nested object.

## BigO

### Measures Efficiency

Memory : Space
CPU : Time

"n" is a relative representation of size.

In my operation, how many "n"s do I create?

We don't care about the size of "n". What we care about is exponential n.

Say John says hello to everyone individually. That is "n".
Now say the entire class does the same thing. That is "n**".
It is so much harder on your computer.

```csharp
Arr = [1,2,3,4,5];

for(Arr) {
    print arr.val
}
// ^ n
for (Arr) {
    for(Arr) {
        for(1...3){
            print arr.value
        }
    }
}
```
^ The inner for(1...3) is just n. Overall this is still jsut n2

```csharp
Arr = [1,2,3,4,5];

A2 = []
for(Arr) {
    print arr.val
}
// ^ n
for (Arr) {
    for(Arr) {
        for(1...3){
            print arr.val
            A2.push(Arr.val) // = n
        }
    }
}
```
^O(1) = Constant

**n** = # of things in the data structure
