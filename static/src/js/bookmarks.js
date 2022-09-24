var nextAvailable = "bookmark" + localStorage.length

class BookmarkManager {
    create(object) {
        var string = JSON.stringify(object);
        localStorage.setItem(nextAvailable, string)
    }
    parseAll() {
        var parsedJSONbookmarks = []
        for(let i = 0; i < localStorage.length; i++) {
            parsedJSONbookmarks.push((localStorage.getItem("bookmark" + i))) 
        }
        parsedJSONbookmarks.forEach(element => {
            var e = element.toString()
            parsedJSONbookmarks = e.split(",")
            var a = parsedJSONbookmarks
            parsedJSONbookmarks = []
            parsedJSONbookmarks = a
            
        })
        return parsedJSONbookmarks;
    }
}

const manager = new BookmarkManager()

manager.create(
    ['name=test&url=https://test.com', 'name=test2&url=https://test.com']
)
console.log(manager.parseAll())