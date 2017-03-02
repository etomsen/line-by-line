export = LineByLineReader;

interface LineByLineReader {
    on(event: LineByLineReaderEvent, listener: Function): this; // from EventEmitter
    pause(): void;
    resume(): void;
    end(): void;
    close(): void;
}

interface LineByLineReaderOptions {
    encoding?: string;
    skipEmptyLines?: boolean;
    start?: number;
}

interface LineByLineReaderConstructor {
    new (filename: string, options?: LineByLineReaderOptions): LineByLineReader;
    readonly prototype: LineByLineReader;
}

type LineByLineReaderEvent = 'line' | 'end' | 'error';

declare const LineByLineReader: LineByLineReaderConstructor;
