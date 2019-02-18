# Alcove Global Corp. Email Signature

Source management repo. Actual signature implementation involves copying into individual email client settings.

Run `npm install` for dependencies.

Signatures are built from `data/corp-data.json`.

Add employee data and run:
`gulp hbs`

To preview signature HTML find individual HTML file from `/signatures` and prepend:
http://htmlpreview.github.io/?
to the URL.


EX:
http://htmlpreview.github.io/?https://github.com/alcovegroup/email-signature/blob/master/signatures/jeff.gottschalk.html