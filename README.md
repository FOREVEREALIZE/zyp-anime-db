# Zyp Anime Database
This repository is a part of the Zyp system. It contains metadata and information about Animes and other things Zyp might need to access.

## Database Format
The database format can be found at the dbDocs page here: [dbDocs](https://dbdocs.io/felixcrat/Zyp-Database)

## JSON Schemas
The JSON schemas for all the files *should* be embedded within the files themeselves (through the top-level `$schema` key) and most IDEs should detect them and auto-apply them.

If that's not the case, all of the schemas for ZDB are in the `schemas/` folder. Do be aware that to apply them to most IDEs you will have to use the Raw version of the file. To access it, click on `Raw` while in the file page in GitHub, and use that link.