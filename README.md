# Zyp Anime Database
This repository is a part of the Zyp system. It contains metadata and information about Animes and other things Zyp might need to access.

## Database Format
The database format can be found at the dbDocs page here: [dbDocs](https://dbdocs.io/felixcrat/Zyp-Database)

## JSON Schemas
The JSON schemas for all the files *should* be embedded within the files themeselves (through the top-level `$schema` key) and most IDEs should detect them and auto-apply them.

If that's not the case, all of the schemas for ZDB are in the `schemas/` folder. Do be aware that to apply them to most IDEs you will have to use the Raw version of the file. To access it, click on `Raw` while in the file page in GitHub, and use that link.

## Special Formats
The ZDB uses a few special formats to standardize certain fields of the Database. They are the following and are specified below:
* ZDB Date Format (or ZDBDF)
* ZDB Time Format (or ZDBTF) (To Be Specified)
* ZDB DateTime Format (or ZDBDTF) (To Be Specified)

### ZDB Date Format
The ZDBDF is a Date Format that is composed of multiple dash-separated parts. These are the following:
* If the Date only has one part: That part is treated as the Year.
  * If it is a two-numbered Year, it is assumed that it refers to a `20xx` year, not a `19xx` year.
  * If it is a three-numbered Year, it is assumed that it refers to a `1xxx` year, not a `2xxx` year.
  * If it is a four-numbered Year, that Year is treated as-is.
  * Currently, ZDBDF does not support years longer than four digits in length.
  * This Date specifies any moment in time within the Year specified.
* If the Date has two parts:
  * The first one is treated as a Year as described above.
  * The second one is treated as a Month:
    * If the Month only has one character (which must be a letter), it is interpreted as follows:
      * `J` => **J**anuary
      * `F` => **F**ebruary
      * `R` => Ma**r**ch
      * `A` => **A**pril
      * `M` => **M**ay
      * `E` => Jun**e**
      * `Y` => Jul**y**
      * `A` => **A**ugust
      * `S` => **S**eptember
      * `O` => **O**ctober
      * `N` => **N**ovember
      * `D` => **D**ecember
    * If the Month has two characters (either both letters or numbers), they are interpreted as follows:
      * `JA` / `01` => **Ja**nuary
      * `FE` / `02` => **Fe**bruary
      * `MA` / `03` => **Ma**rch
      * `AP` / `04` => **Ap**ril
      * `MA` / `05` => **Ma**y
      * `JN` / `06` => **J**u**n**e
      * `JL` / `07` => **J**u**l**y
      * `AU` / `08` => **Au**gust
      * `SE` / `09` => **Se**ptember
      * `OC` / `10` => **Oc**tober
      * `NO` / `11` => **No**vember
      * `DE` / `12` => **De**cember
    * If the Month meets one of the following criteria it is deemed invalid:
      * The Month has three or more characters
      * The Month has two characters but one is a number and one a letter
      * The Month has one character but it is a number
      * The Month has one or two characters but they don't match any of the described cases
    * This Date specifies any moment in time within the Year and Month specified.
* If the Date has three parts:
  * The first part is treated as a Year as described above.
  * The second part is treated as a Month as described above.
  * The third parts is treated as a Day:
    * Days may only have exactly two characters which must be numbers ranging from `01` to `31` (inclusive).
    * Any number outside of the `01`-`31` range, will make the Day invalid.
  * This Date specifies any moment in time within the Year, Month and Day specified.
* All Dates must be in the `UTC+00` (or `Exact UTC`) timezone.