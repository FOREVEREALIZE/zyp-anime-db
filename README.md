# Zyp Anime Database
This repository is a part of the Zyp system. It contains metadata and information about Animes and other things Zyp might need to access.

## Database Format
The database format can be found at the dbDocs page here: [dbDocs](https://dbdocs.io/felixcrat/Zyp-Database)

## JSON Schemas
The JSON schemas for all the files *should* be embedded within the files themeselves (through the top-level `$schema` key) and most IDEs should detect them and auto-apply them.

If that's not the case, all of the schemas for ZDB are in the `schemas/` folder. Do be aware that to apply them to most IDEs you will have to use the Raw version of the file. To access it, click on `Raw` while in the file page in GitHub, and use that link.

## Special Formats
The ZDB uses a few special formats to standardize certain fields of the Database. They are the following and are specified below:
* ZDB Timezone Format (or ZDBTZF)
* ZDB Date Format (or ZDBDF)
* ZDB Time Format (or ZDBTF)
* ZDB DateTime Format (or ZDBDTF)

### ZDB Timezone Format
The ZDBTZF is a Timezone Format that is composed of two parts, which are not separated with any character. These are the following:
* The first part is the Timezone Discriminator. It must always be `TZ`.
* The second part is the Timezone Offset. It's length ranges from one to four characters:
  * If there is only one character, it is interpreted as follows:
    * `A` => `UTC+00`
    * `B` => `UTC+01`
    * `C` => `UTC+02`
    * `D` => `UTC+03`
    * `E` => `UTC+04`
    * `F` => `UTC+05`
    * `G` => `UTC+06`
    * `H` => `UTC+07`
    * `I` => `UTC+08`
    * `J` => `UTC+09`
    * `K` => `UTC+10`
    * `L` => `UTC+11`
    * `M` => `UTC+12`
    * `N` => `UTC-01`
    * `O` => `UTC-02`
    * `P` => `UTC-03`
    * `Q` => `UTC-04`
    * `R` => `UTC-05`
    * `S` => `UTC-06`
    * `T` => `UTC-07`
    * `U` => `UTC-08`
    * `V` => `UTC-09`
    * `W` => `UTC-10`
    * `X` => `UTC-11`
    * `Y` => `UTC-12`
  * If there are two characters, they are interpreted as follows:
    * `00` => `UTC+00`
    * `01` => `UTC+01`
    * `02` => `UTC+02`
    * `03` => `UTC+03`
    * `04` => `UTC+04`
    * `05` => `UTC+05`
    * `06` => `UTC+06`
    * `07` => `UTC+07`
    * `08` => `UTC+08`
    * `09` => `UTC+09`
    * `10` => `UTC+10`
    * `11` => `UTC+11`
    * `12` => `UTC+12`
    * `-B` => `UTC-01`
    * `-C` => `UTC-02`
    * `-D` => `UTC-03`
    * `-E` => `UTC-04`
    * `-F` => `UTC-05`
    * `-G` => `UTC-06`
    * `-H` => `UTC-07`
    * `-I` => `UTC-08`
    * `-J` => `UTC-09`
    * `-K` => `UTC-10`
    * `-L` => `UTC-11`
    * `-M` => `UTC-12`
  * If there are three characters, they are interpreted as follows:
    * `+00` / `UTC` => `UTC+00`
    * `+01` => `UTC+01`
    * `+02` => `UTC+02`
    * `+03` => `UTC+03`
    * `+04` => `UTC+04`
    * `+05` => `UTC+05`
    * `+06` => `UTC+06`
    * `+07` => `UTC+07`
    * `+08` => `UTC+08`
    * `+09` => `UTC+09`
    * `+10` => `UTC+10`
    * `+11` => `UTC+11`
    * `+12` => `UTC+12`
    * `-01` => `UTC-01`
    * `-02` => `UTC-02`
    * `-03` => `UTC-03`
    * `-04` => `UTC-04`
    * `-05` => `UTC-05`
    * `-06` => `UTC-06`
    * `-07` => `UTC-07`
    * `-08` => `UTC-08`
    * `-09` => `UTC-09`
    * `-10` => `UTC-10`
    * `-11` => `UTC-11`
    * `-12` => `UTC-12`
  * The recommended way of specifing Timezones is using the three-character notation.

### ZDB Date Format
The ZDBDF is a Date Format that is composed of multiple dash-separated parts. These are the following:
* If the Date only has one part, it is treated as the Year:
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
* All Dates must be in the `UTC+00` (or `Exact UTC`) Timezone unless the Date ends with a ZDBTZF Formatted Timezone, not separated with a dash from the main Date. It is recommended to avoid setting Timezones as much as possible, because the Date will probably be replaced with it's `UTC+00` counterpart by someone else.

### ZDB Time Format
The ZDBTF is a Time Format that is composed of multiple colon-separated parts. These are the following:
* If the Time only has one part, it is treated as the Hour:
  * If the Hour only has one character, that character will make the Hour precise to half of the day, those being the ones described below. This will also cause the Time to finish at that this part with the possibility to have a Timezone at the end.
    * `A` => `00:00` to `11:59`
    * `P` => `12:00` to `23:59`
  * If the Hour has two characters, which must both be letters or numbers, they are interpreted as follows:
    * `AM` => `00:00` to `11:59` (Using this Hour will cause the Time to finish at that this part with the possibility to have a Timezone at the end)
    * `PM` => `12:00` to `23:59` (Using this Hour will cause the Time to finish at that this part with the possibility to have a Timezone at the end)
    * `00` => `00:00` to `00:59`
    * `01` => `01:00` to `01:59`
    * `02` => `02:00` to `02:59`
    * `03` => `03:00` to `03:59`
    * `04` => `04:00` to `04:59`
    * `05` => `05:00` to `05:59`
    * `06` => `06:00` to `06:59`
    * `07` => `07:00` to `07:59`
    * `08` => `08:00` to `08:59`
    * `09` => `09:00` to `09:59`
    * `10` => `10:00` to `10:59`
    * `11` => `11:00` to `11:59`
    * `12` => `12:00` to `12:59`
    * `13` => `13:00` to `13:59`
    * `14` => `14:00` to `14:59`
    * `15` => `15:00` to `15:59`
    * `16` => `16:00` to `16:59`
    * `17` => `17:00` to `17:59`
    * `18` => `18:00` to `18:59`
    * `19` => `19:00` to `19:59`
    * `20` => `20:00` to `20:59`
    * `21` => `21:00` to `21:59`
    * `22` => `22:00` to `22:59`
    * `23` => `23:00` to `23:59`
  * If the Hour has three characters, they are interpreted as follows:
    * `00A` => `00:00` to `00:59`
    * `01A` => `01:00` to `01:59`
    * `02A` => `02:00` to `02:59`
    * `03A` => `03:00` to `03:59`
    * `04A` => `04:00` to `04:59`
    * `05A` => `05:00` to `05:59`
    * `06A` => `06:00` to `06:59`
    * `07A` => `07:00` to `07:59`
    * `08A` => `08:00` to `08:59`
    * `09A` => `09:00` to `09:59`
    * `10A` => `10:00` to `10:59`
    * `11A` => `11:00` to `11:59`
    * `00P` => `12:00` to `12:59`
    * `01P` => `13:00` to `13:59`
    * `02P` => `14:00` to `14:59`
    * `03P` => `15:00` to `15:59`
    * `04P` => `16:00` to `16:59`
    * `05P` => `17:00` to `17:59`
    * `06P` => `18:00` to `18:59`
    * `07P` => `10:00` to `19:59`
    * `08P` => `20:00` to `20:59`
    * `09P` => `21:00` to `21:59`
    * `10P` => `22:00` to `22:59`
    * `11P` => `23:00` to `23:59`
  * If the Hour has four characters, they are interpreted as follows:
    * `00AM` => `00:00` to `00:59`
    * `01AM` => `01:00` to `01:59`
    * `02AM` => `02:00` to `02:59`
    * `03AM` => `03:00` to `03:59`
    * `04AM` => `04:00` to `04:59`
    * `05AM` => `05:00` to `05:59`
    * `06AM` => `06:00` to `06:59`
    * `07AM` => `07:00` to `07:59`
    * `08AM` => `08:00` to `08:59`
    * `09AM` => `09:00` to `09:59`
    * `10AM` => `10:00` to `10:59`
    * `11AM` => `11:00` to `11:59`
    * `00PM` => `12:00` to `12:59`
    * `01PM` => `13:00` to `13:59`
    * `02PM` => `14:00` to `14:59`
    * `03PM` => `15:00` to `15:59`
    * `04PM` => `16:00` to `16:59`
    * `05PM` => `17:00` to `17:59`
    * `06PM` => `18:00` to `18:59`
    * `07PM` => `10:00` to `19:59`
    * `08PM` => `20:00` to `20:59`
    * `09PM` => `21:00` to `21:59`
    * `10PM` => `22:00` to `22:59`
    * `11PM` => `23:00` to `23:59`
  * This Time specifies any moment in time within the Hour specified.
* If the Time has two parts, they are treated as follows:
  * The first part is treated as the Hour, as described above.
  * The second part is treated as the Minute. Minutes can be any 2-digit number ranging from `00` to `59` (inclusive).
  * This Time specifies any moment in time within the Hour and Minute specified.
* If the Time has three parts, they are treated as follows:
  * The first part is treated as the Hour, as described above.
  * The second part is treated as the Minute, as described above.
  * The third part is treated as the Second. Seconds can be any 2-digit number ranging from `00` to `59` (inclusive).
  * This Time specifies any moment in time within the Hour, Minute and Second specified.
* Currently, ZDBTF only supports precision up to the Second.
* All Times must be in the `UTC+00` (or `Exact UTC`) Timezone unless the Time ends with a ZDBTZF Formatted Timezone, not separated with a colon from the main Time. It is recommended to avoid setting Timezones as much as possible, because the Time will probably be replaced with it's `UTC+00` counterpart by someone else.

### ZDB DateTime Format
The ZDBDTF is a DateTime Format that is composed of three to four parts. These are the following:
* The first part must be a ZDBDF Formatted Date which must **not** include a Timezone at the end. It also must be of maximum precision (AKA it must include all three parts).
* The second part must be an `@`.
* The third part must be a ZDBTF Formatted Time which must **not** include a Timezone at the end. It does not need to be of maximum precision (AKA it can omit some parts, but not all)
* Both the Time and Date must be in the `UTC+00` (or `Exact UTC`) Timezone unless the fourth part is a ZDBTZF Formatted Timezone, not separated with a colon from the main DateTime. It is recommended to avoid setting Timezones as much as possible, because the DateTime will probably be replaced with it's `UTC+00` counterpart by someone else. The fact that there is only one Timezone also means both the Date and the Time must be in the same Timezone.
