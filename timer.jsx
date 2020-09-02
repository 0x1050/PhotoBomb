//Function to time Javascript and Action speeds


var totalTime = new TimeIt();

//Script/Action to be timed


totalTime.stop();
// log it out
totalTime.getTime();

function TimeIt() {
  // member variables
  this.startTime = new Date();
  this.endTime = new Date();

  // member functions

  // reset the start time to now
  this.start = function () {
        this.startTime = new Date();
    }
  // reset the end time to now
  this.stop = function () {
        this.endTime = new Date();
    }
  // get the difference in milliseconds between start and stop
  this.getTime = function () {
        return (this.endTime.getTime() - this.startTime.getTime()) / 1000;
    }
  // get the current elapsed time from start to now, this sets the endTime
  this.getElapsed = function () {
        this.endTime = new Date(); return this.getTime();
    }
}