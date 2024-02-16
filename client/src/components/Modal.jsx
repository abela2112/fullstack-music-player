import React, { useEffect, useRef, useState } from 'react'
import { Box, Button, Dialog, Form, Typography } from './Styles'
import { useDispatch, useSelector } from 'react-redux'
import { deleteSong, setModalOpen } from '../redux/features/songs'

const Modal = ({ isOpen, hasCloseBtn = true, onClose, id }) => {
    const dispatch = useDispatch()
    //const { isModalOpen } = useSelector(state => state.songs)


    const [isModalOpen, setModalOpen] = useState(isOpen);
    const modalRef = useRef(null);

    const handleCloseModal = () => {
        if (onClose) {
            onClose();
        }
        setModalOpen(false);
    };
    const handleDelete = (id) => {

        console.log(id);
        dispatch(deleteSong(id))
        handleCloseModal()

    }
    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            handleCloseModal();
        }
    };

    useEffect(() => {
        setModalOpen(isOpen);
    }, [isOpen]);

    useEffect(() => {
        const modalElement = modalRef.current;

        if (modalElement) {
            if (isModalOpen) {
                modalElement.showModal();
            } else {
                modalElement.close();
            }
        }
    }, [isModalOpen]);

    return (

        <Dialog ref={modalRef} onKeyDown={handleKeyDown} width={['full', '600px', '700px']}>
                <Box flexDirection='column' width='full' height='full' >
                    <Typography textAlign='start' fontSize={['1rem', '1.4rem']} my={1}>Are you sure you want to delete this item?
                    </Typography>
                    <Box justifyContent='flex-end' width='full' >
                        <Box justifyContent='space-between' alignItems='center' mt={2}
                        >
                            <Button
                                width={["100%", '200px']}
                                px={[0, 3]}
                                py={2}
                                position='relative'

                                fontSize={['1rem', "1.4rem"]}
                                border="none"
                                outline="none"
                                bg="#909090"
                                color="white"
                                mr={2}
                                onClick={handleCloseModal}
                            >Cancel</Button>
                            <Button
                                type="submit"
                                width={["100%", '200px']}
                                px={[0, 3]}
                                py={2}
                                fontSize={['1rem', "1.4rem"]}
                                border="none"
                                outline="none"
                                bg="#247fcf"
                                color="white"
                                onClick={() => handleDelete(id)}
                            >
                                Delete</Button>
                        </Box>
                    </Box>
                </Box>

        </Dialog >

    )
}

export default Modal