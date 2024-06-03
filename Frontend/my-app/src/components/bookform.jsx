import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button, Input, FormHelperText, FormControl, FormLabel } from '@chakra-ui/react'
import axios from 'axios';

export const BookForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');


    return (
        <>
            <div >
                <Card>
                    <CardBody >
                        <FormControl>
                            <FormLabel>Title</FormLabel>
                            <Input type='text' />
                            <FormLabel>author</FormLabel>
                            <Input type='text' />
                            <FormLabel for="file">Frontcover</FormLabel>
                            <Input type='file' />
                            <FormLabel for="file">Backcover</FormLabel>
                            <Input type='file' />
                        </FormControl>
                    </CardBody>
                    <Button variant='solid' colorScheme='blue'>
                        Create Book
                    </Button>
                </Card>
            </div>
        </>
    );
};
