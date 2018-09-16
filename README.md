# No framework to build single-page applications

This project is not specific software packages, but a do not wish to rely on the framework, pure native environment construction single-page applications via a browser (SPA) solution.This project is not updated regularly.

- Don't like framework

  Framework in native HTML to add a layer above, using the framework needs to rely on specialized tools, need to master the corresponding feature and language.


- Need to solve the problem

  View action ✔

  Components of communication?

  Namespace and reuse ✘


- View action

  View through global hashchange event processing.

  Don't through specifically, one by one to add event operation view, can lead to redundant code, and complex structure.

  How to arrange the node id, hash of hierarchy is still not very clear.Eliminate invalid hash, set up the index view details, such as still very trouble.

- Components of communication

  A processing model is divided into inlet end (that is, the event is triggered, obtained in) and outlet (i.e. view response)

  Model of event processing arrangement in the "least common container" at each end.Such as hashchange arranged in the window.

  Ajax is as a network IO, the other is user events (IO).

