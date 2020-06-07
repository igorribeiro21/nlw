import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import './styles.css'
import { FiUpload } from 'react-icons/fi'

interface Props {
    onFileUploaded : (file:File) => void
}

const Dropzone:React.FC<Props> = ({onFileUploaded}) => {
    const [selectedFileUrl, setselectedFileUrl] = useState('')

    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0]

        const fileUrl = URL.createObjectURL(file)

        setselectedFileUrl(fileUrl)
        onFileUploaded(file)
    }, [onFileUploaded])
    const { getRootProps, getInputProps } = useDropzone({onDrop,accept:'image/*'})

    return (
        <div className="dropzone" {...getRootProps()}>
            <input key={1} {...getInputProps()} accept="image/*"/>

            {
                selectedFileUrl ?
                    <img src={selectedFileUrl} alt="Point thumbnail" /> :
                    (
                        <p >
                            <FiUpload />
            Imagem do Estabelecimento
                        </p>
                    )

            }

        </div >
    )
}

export default Dropzone