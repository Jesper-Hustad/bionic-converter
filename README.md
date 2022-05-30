[![npm version](https://badge.fury.io/js/bionic-converter.svg)](https://badge.fury.io/js/bionic-converter)
# Bionic-converter

`function bionicConvert(str: string, fixationLength?: number, separator?: string[] | string): string`

### `Getting started`
`npm install bionic-converter`

```javascript
const bionicConvert = require('bionic-converter')

console.log(bionicConvert("Lorem ipsum dolor sit amet"))

>> "<b>Lor</b>em <b>ips</b>um <b>dol</b>or <b>s</b>it <b>am</b>et"
```
 


### `Fixation point`


```javascript
// Set fixation point from 1 - 5 (default 3)
bionicConvert("Lorem ipsum dolor sit amet.", 1)
```



### `Separator`
```javascript
// "latex", "markdown", "html", or array ["<b>","</b>"]

bionicConvert("Lorem ipsum dolor sit amet.", 3, "latex")
>> "\textbf{lor}em \textbf{ips}um \textbf{dol}or \textbf{si}t \textbf{ame}t."

bionicConvert("Lorem ipsum dolor sit amet.", 3, ["(", ")"])
>> "(Lor)em (ips)um (dol)or (s)it (am)et."
```

