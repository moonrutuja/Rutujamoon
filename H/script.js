var fs=require('fs')
fs.appendFile('test.txt', 'Contents of test file', function(err)
{
if (err) throw err;
console.log('File is saved successfully!');
});
var fs=require('fs')
fs.writeFile('test.txt', 'Welcome to this file from node js', function(err)
{
if (err) throw err;
console.log('Saved!');
});
var fs=require('fs')
fs.rename('test2.txt', 'test3.txt', function(err)
{
if (err) throw err;
console.log('File Renamed Successfully!');
});
var fs=require('fs')
fs.unlink('test.txt', function(err)
{
if (err) throw err;
console.log('File Deleted Successfully!');
});