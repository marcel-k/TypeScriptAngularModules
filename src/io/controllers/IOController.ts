/*
* no module declaration. The file itself is a module!
*/
class IOController {

    input: string;

    static $inject = ['$log', 'ioService']; //$inject closeby the constructor or use ng-annotate. angular injectables should go first
    constructor(private $log: ng.ILogService, private ioService: IO.IIOService) {
    }

    /*
     * Write button clicked!
     */
    onWriteClick(): void {
        this.ioService.writeInput(this.input)
            .then((res) => this.onWriteFinished(res),(err) => this.onWriteError(err));//Wrap in lamda or this keyword will not be bound correctly
    }

    /*
    * Read button clicked!
    */
    onReadClick(): void {
        this.ioService.readOutput('a/path/to/nowhere')
            .then(this.onReadFinished.bind(this), this.onReadError.bind(this));//Or use the javascript bind function to bind to the IOController
    }

    /*
     * Read succesfully finished!
     */
    private onReadFinished(result: string): void {
        this.$log.info(result);
    }

    /*
     * Write succesfully finished!
     */
    private onWriteFinished(resultWritten: string): void {
        this.$log.info('succesfully written: ' + resultWritten);
    }

    /*
     * Uh Oh errors!
     */
    private onReadError(error: string): void { }
    private onWriteError(result: boolean): void { }
}

  /*
   * Expose the class via the export keyword. 
   * This will expose the IOController as an importable module
   */
export = IOController;