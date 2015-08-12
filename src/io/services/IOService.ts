/*
* no module declaration. The file itself is a module!
*/
class IOService implements IO.IIOService {

    //$inject closeby the constructor or use ng-annotate
    static $inject = ['$q'];
    constructor(private $q: ng.IQService) {
        //'private $q' equals 'this.$q = $q;'
    }

    /*
     * Asynchronously read input from a file/stream /whatever
     */
    readOutput(inputPath: string | FileReader): ng.IPromise<string> {
        var defer = this.$q.defer();
        //read read read, success!
        defer.resolve('This is the content of the file I read.');
        //or read read, failure!
        //defer.reject('I could not read!');

        return defer.promise;
    }

    /*
     * Asynchronously write the output to a file/stream/whatever
     * @param data Data to write
     * @return Promise that returns the string that is written.
     */
    writeInput(data: string): ng.IPromise<string> {
        var defer = this.$q.defer();

        //write write write, success!
        defer.resolve(data);
        //or write write, failure!
        //defer.reject('I failed to write!');

        return defer.promise;
    }
}

 /*
  * Expose the class via the export keyword. 
  * This will expose the IOController as an importable module
  */
export = IOService;