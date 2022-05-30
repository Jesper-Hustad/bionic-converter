# bionic-converter


[npm module](https://www.npmjs.com/package/bionic-converter)
Convert text to bionic reading format.
Example: **Lor**em **ips**um **dol**or **s**it **am**et, **consec**tetur  

**Demo**


```javascript
const bionicConvert = require('bionic-converter')

console.log(bionicConvert("Lorem ipsum dolor sit amet, consectetur"))
```
`<b>Lor</b>em <b>ips</b>um <b>dol</b>or <b>s</b>it <b>am</b>et, <b>consec</b>tetur`  


**Fixation point**

Set fixation point from `1 - 5` (default `3`)
```javascript
bionicConvert("Lorem ipsum dolor sit amet.", 1)
> <b>Lor</b>em <b>ips</b>um <b>dol</b>or <b>si</b>t <b>ame</b>t, <b>consectet</b>ur
```
Output for fixation point 1: **Lor**em **ips**um **dol**or **si**t **ame**t, **consectet**ur


```javascript
bionicConvert("Lorem ipsum dolor sit amet.", 5)
> <b>Lo</b>rem <b>ip</b>sum <b>do</b>lor <b>s</b>it <b>a</b>met, <b>con</b>sectetur
```
Output for fixation point 5: **Lo**rem **ip**sum **do**lor **s**it **a**met, **con**sectetur

**Separator**
Set separator by passing array as third argument, this example will output markdown.
```javascript
bionicConvert("Lorem ipsum dolor sit amet.", 3, ['**','**'])
> **Lor**em **ips**um **dol**or **s**it **am**et, **consec**tetur
```

Using strong html tags
```javascript
bionicConvert("Lorem ipsum dolor sit amet.", 3, ['<strong>','</strong>'])
> <strong>Lor</strong>em <strong>ips</strong>um <strong>dol</strong>or <strong>s</strong>it <strong>am</strong>et, <strong>consec</strong>tetur
```