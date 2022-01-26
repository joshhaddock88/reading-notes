# Read-03: System IO

## File and Stream

### Files and Directories

Commonly used file and direcftory classes

- **File**: provides static methods for creating, copying, deleting, moving, and opening files, and hleps create a FileStream object.

- **FileInfo**: provides instance methods for creating, copying, deleting, moving, and opening files, and helps create a FileStream object

- **Director**: Provides static methods for creating, moving, and enumerating through directories and subdirectories.

- **DirectoryInfo**: provides instance methods for creating, moving, and enumerating through directories and subdirectories.

- **Path**: provides methods and properties for processing directors strings in a corss-platform manner.

### Streams

Streams involve three fundamental operations:

- **Reading** - transferring data from a stream into a data structure, such as an array of bytes.

- **Writing** - transferring dtat to a stream from a data source.

- **Seeking** - Querying and modifying the current position within a stream.

Commonly used stream class: FileStream, IsolatedStorageFileStream, MemoryStream, BufferedStream, NetworkStream, PipeStream, CryptoStream

### Readers and Writers

**System.IO** also provides types for reading encoded characters from streams and writing them to streams.

Commonly used reader and writer class: BinaryReader & BinaryWriter, StreamReader/StreamWriter, StringReader/StringWriter, TextReader/TextWriter.

### Asynchronous I/O operations

Asynchronous members contain **Async** in their names, such as CopyToAsync, FlushAsync, ReadAsync, WriteAsync.

### Compression

Refers to the process of reducing the size of a file for storage.

Common: ZipArchive, ZipArchiveEntry, ZipFile, ZipFileExtensions, DeflateStream, GZipStream.

## I/O and Security

Default security policies provent Internet or intranet appliations from access files on the user's comptuer. Therefore, do not use the I/P classes that require a path to a physical file when wirting code that will be downloaded over the internet or intranet.

## How to: Write text to a file

### Example: Synchronously write text with StreamWriter

```csharp
using System;
using System.IO;

class Program
{
    static void Main(string[] args)
    {
        //Create a string array with the lines of text
        string[] lines = {"First line", "Second line", "Third line"};

        //Set a variable to the Documents path.
        string docPath = Environment.GetFolderPath(Environmnet.SpecialFolder.MyDocumnets);

        //Write the string array to a new file named "WriteLines.txt".
        using (StreamWriter outputFile = new StreamWriter(Path.Combine(docPath, "WriteLines.txt")))
        {
            foreach (string line in lines)
                outputFile.WriteLine(line);
        }
    }
}
// The example create a file named WriteLines.txt" with the following contents:
// First line
// Second line
// Third line
```

## How to Read and write to a newly created data file

### Example

```csharp
using System;
using System.IO;

class MyStream
{
    private const string FILE_NAME = "Test.data";

    public static void Main()
    {
        if (File.Exists(FILE_NAME))
        {
            Console.WriteLine($"{FILE_NAME} already exists!");
            return;
        }

        using (FileStream fs = new FileStream(FILE_NAME, FileMode.CreateNew))
        {
            using (BinaryWriter w = new BinaryWriter(fs))
            {
                for (int i =0; i < 11; i++)
                {
                    w.Write(i)
                }
            }
        }
        using (FileStream fs = new FileStream(FILE_NAME, FileMode.Open, FileAccess.Read))
        {
            using (BinaryReader r = new BinaryReader(fs))
            {
                for (int i = 0; i < 11; i++)
                {
                    Console.WriteLine(r.ReadInt32());
                }
            }
        }
    }
}
//The example creates a filenamed "Test.data" and writes the integers 0-10 to it in binary format.
// It then writes the contents of Test.data to the console with each integer on a separate line.
```
