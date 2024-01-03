class PriorityQueue {
 collection = [];
  enqueue(element) {
    if (this.collection.length === 0) {
      this.collection.push(element);
    } else {
      let added = false;
      for (let i = 0; i < this.collection.length; i++) {
        if (element[1] < this.collection[i][1]) {
          //console.log(i, element[1], "<", this.collection[i][1]); //for check
          this.collection.splice(i, 0, element); //it's just replaces.
          added = true;
          break;
        }
      }
      if (!added) {
        this.collection.push(element);
      }
    }
  }
  log(){
    console.log(this.collection);
  }
}

let obj = new PriorityQueue();
obj.enqueue(["bikes", 11]);
obj.enqueue(["cars", 1]);
obj.enqueue(["planes", -3]);
obj.enqueue(["tanks", 2]);
obj.log()