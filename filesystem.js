// Don't need to remember all usage, but to remember what kinds of methods we can use.

/* They all use callback functions */

// open a file
// fs.open(path, flags[, mode], callback)
// callback args: (err, fd)

// get file information
// fs.stat(path, callback)
// callback args: (err, stats)

// write files
// callback args: err 

// read files
// fs.read(fd, buffer, offset, length, position, callback)
// callback args: (err, bytesRead, buffer)

// close files
// fs.close(fd, callback)
// callback args: err 

// delete files
// fs.unlink(path, callback)
// callback args: err 

// create a directory
// callback args: fs.mkdir(path[, mode], callback)


// read a directory
// fs.readdir(path, callback)
// callback args: (err, files)

// remove a directory
// fs.rmdir(path, callback)
// callback args: err
