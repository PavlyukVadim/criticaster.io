---
path: /js-dictionary/architecture-principles
title: 📙 JavaScript Dictionary
metaTitle: JavaScript Dictionary
metaDescription: JavaScript Dictionary | place with explanations for each buzzword in the JS world
metaKeywords: 'javascript, html5, canvas'
wrapperClass: dictionary
---

Place with explanations for each buzzword in the JS world.😀

[A](#a) [B](#b) [C](#c) [D](#d) [E](#e) [F](#f) [G](#g) [H](#h) [I](#i) [J](#j) [K](#k) [L](#l) [M](#m) [N](#n) [O](#o) [P](#p) [Q](#q) [R](#r) [S](#s) [T](#t) [U](#u) [V](#v) [W](#w) [X](#x) [Y](#y) [Z](#z)

# Architecture principles:

## A:

## B:

## C:

#### ```Cohesion```

#### ```Coupling```

## D:

#### ```Data Access Layer```

#### ```Dependency Injection```

A form of ```IoC```, where implementations are passed into an object through constructors/setters, which the object will 'depend' on in order to behave correctly.

## E:

## F:

## G:

#### ```GRASP```

## H:

## I:

#### ```Inversion of control```

A programming principle by which the control of objects or portions of a program is transferred to a container or framework.

## J:

## K:

## L:

## M:

## N:

## O:

## P:

## Q:

## R:

## S:

#### ```SOLID```

* #### Single Responsibility Principle

"There should never be more than one reason for a class to change". Ask yourself what does your class do? If the answer is a list of things your class probably don't satisfies SRP (like ```printReport``` method inside ```Employee``` class).

* #### Open/Closed Principle

"Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification." It promotes using an abstractions for linking entities (like area method for each Shape for using area in some entity, so you can easily create another shape).

* #### Liskov Substitution Principle

"If S is a subtype of T, then objects of type T may be replaced with objects of type S without altering any of the desirable properties of that program." So if you have a parent class and a child class, then the base class and child class can be used interchangeably without getting incorrect results. (It's better to extend Reactangle and Squre from Shape).

* #### Interface Segregation Principle

"Clients should not be forced to depend upon interfaces that they do not use."
Split your interfaces to smaller for using only ones that you need.

* #### Dependency Inversion Principle

Gives recommendations on what dependencies should be:

  - High-level modules should not depend on low-level modules. Both should depend on abstractions.
  - Abstractions should not depend upon details. Details should depend on abstractions.

## T:

## U:

## V:

## W:

## X:
## Y:
## Z: