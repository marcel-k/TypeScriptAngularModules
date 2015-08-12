/*
 * declare a module for the interfaces that belong to that domain to reside in.
 */
declare module IO {    
    /*
     * interfaces are implictly public/exported in d.ts
     */
    interface IIOService {
        readOutput: (inputPath: string | FileReader) => ng.IPromise<string>;
        writeInput: (data: string) => ng.IPromise<string>;
    }
}