'use client'
import { ImageIcon, UploadIcon, X } from "lucide-react";
import { DropzoneState, useDropzone } from "react-dropzone";

interface InputProps {
    dropzone: DropzoneState;
}

interface HasFileProps {
    files?: File[];
    removeFile: (index: number) => void;
}

interface FileInputProps {
    files?: File[];
    onDrop: (files: File[]) => void;
    removeFile: (index: number) => void;
}

export function FileInput({ files, onDrop, removeFile }: FileInputProps) {
    const dropzone = useDropzone({
        onDrop: (acceptedFiles) => onDrop([...(files || []), ...acceptedFiles]),
        accept: { 'application/image': ['.jpg', '.png', '.jpeg'] }
    });

    return (
        <div>
            {
                files && files.length > 0 ? (
                    <HasFile files={files} removeFile={removeFile} />
                ) : (
                    <Input dropzone={dropzone} />
                )
            }
        </div>
    )
};

function Input({ dropzone }: InputProps) {
    const { getRootProps, getInputProps, isDragActive } = dropzone

    return (
        <div
            {...getRootProps()}
            className={`w-full h-full rounded-lg border-dashed border-4 p-2 border-red-800 hover:border-red-700 hover:bg-red-300 transition-all duration-100
            ${isDragActive ? 'text-red-700' : 'bg-red-200'}
            `}>
            <label htmlFor="dropzone-file" className="cursor-pointer w-full h-full">
                <div className="flex flex-col justify-center items-center pt-5 pb-6 w-full h-full">
                    <UploadIcon className={`w-10 h-10 mb3 ${isDragActive ? 'text-red-700' : 'text-red-950'}`} />
                    {
                        isDragActive ? (
                            <p className="font-bold text-lg text-red-700">Solte para adicionar a imagem</p>
                        ) : (
                            <>
                                <p className="text-lg text-red-950">
                                    <span className="font-bold">Clique para enviar</span> ou arraste até aqui
                                </p>
                                <p className="text-red-950">Imagem</p>
                            </>
                        )
                    }
                </div>
            </label>
            <input {...getInputProps()} className="hidden" />
        </div>
    )
}

function HasFile({ files, removeFile }: HasFileProps) {
    return (
        <div className="w-full">
            {files && files.length > 0 && (
                <div>
                    {files.map((file, index) => (
                        <div key={index} className="flex items-center justify-center w-full h-full rounded-lg px-2 border-dashed border-4 border-red-800 hover:border-red-700 hover:bg-red-300 transition-all duration-100">
                            <div className="bg-white w-full rounded-md shadow-md flex gap-3 items-center justify-center p-2">
                                <ImageIcon className="w-5 h-6 my-4 ml-4" />
                                <span>{file.name}</span>
                                <button onClick={() => removeFile(index)} className="place-self-start mt-1 p-1" type="button">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}