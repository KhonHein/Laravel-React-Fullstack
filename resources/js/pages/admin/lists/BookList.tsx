import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import Book from './Book'

import { booksList } from './data'
import { useParams } from 'react-router'
import { BookType } from '../../../type/type'

//fetch the books from server
//console.log(`${baseUrl}api/book/list/${id}`)

const BookList = () => {
    const param = useParams();
    const categoryId = Number(param.id);
    const noCategoryId = categoryId? true:false;
    return (
        <Box sx={{ height: '95vh', my: 7 }}>
            <Typography
                variant='h6'
                className='color_1'
                sx={{ display: 'flex', justifyContent: 'center' }}
            > Library Books List
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', width: 'auto', justifyContent: 'center', m: '0 auto' }}>
                {

                    noCategoryId ? booksList.map((book: BookType, index) => {

                        if (book.category_id === categoryId) {
                            return (
                                <Book
                                    key={index}
                                    category_id={Number(book.category_id)}
                                    image={book.image}
                                    outline={book.outline}
                                    id={Number(book.id)}
                                    name={book.name}
                                    archive={book.archive ? true : false}
                                />
                            )
                        }
                    }) : booksList.map((book: BookType, index) => {

                        return (
                            <Book
                                key={index}
                                category_id={Number(book.category_id)}
                                image={book.image}
                                outline={book.outline}
                                id={Number(book.id)}
                                name={book.name}
                                archive={book.archive ? true : false}
                            />
                        )
                    })

                }
            </Box>
        </Box>
    )
}
export default BookList
