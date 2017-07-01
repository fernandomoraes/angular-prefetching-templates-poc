# angular-prefetching-templates-poc

This is a simple proof of concept, exemplifying a way to perform pre fetching on demand of mapped states html templates.

## How its works:
Created a mechanism that loads the template when the 'ui-sref' directive is present. Through the value assigned to ui-sref, the state's settings are retrieved and the html loading done, this can be seen in ````src/ui-sref.decorator.js````

**Some things that can be improved:**
* Does not load template when directive is disabled.
* Multiple requests to load the same template at the same time. See load method in TemplateLoader service, one option would be to check if the template is already being loaded.
* Only prefetching when the application is idle, thus ensuring that the main requisites are not impaired due to lack of resources.

## Run:
To run, any http server can be used:

```bash
cd src && python -m SimpleHTTPServer
```
Open the browser debug and check the requests.
