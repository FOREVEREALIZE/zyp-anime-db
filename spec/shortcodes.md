# The Shortcode Spec
## Needs
*To Be Done*

## Structure
A shortcode consists of multiple parts, as described below:
* The **Type**
* The **Main Identifier**
* One (or more) (optional) **Sub Identifiers**

### Types
The following types are recognised in the spec, and explained separately:
* `AS`: Anime Series
* `AM`: Anime Movie
* `AX`: Anime Special

### Main Identifiers
A *MID* is a unique (at least within it's type) ID for the element that Shortcode refers to.
There are a few reserved *MIDs*, which are the following:
* `EXAM`: Used for examples in docs and the DB itself
* `UNKN`: Reserved for compatibility and development purposes

### Sub Identifiers
A *SID* is an additional piece of information that narrows down exactly what that Shortcode points to.
*SIDs* depend on the type and can be found by seeing each Type's section.

## The Structure of an Anime Series Shortcode
Example of an *ASS*: `AS-EXAM-01-02-03-04-05-06`
A part from the *Type* and *Main Identifier*, an *ASS* can have the following *SIDs*, each one requiring all the previous to be able to be present:
* Season (`01` in the axample above)
* Episode (`02` in the axample above)
* Hour (`03` in the axample above)
* Minute (`04` in the axample above)
* Second (`05` in the axample above)
* Frame (`06` in the axample above)