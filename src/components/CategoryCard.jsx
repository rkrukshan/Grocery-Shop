import React from 'react';
import { Card, CardMedia, Typography, Box } from '@mui/material';

export default function CategoryCard(props) {
    return (
        <Card
            sx={{
                width: '100%',
                borderRadius: '16px',
                boxShadow: 3,
                '&:hover': {
                    boxShadow: 6,
                    transform: 'translateY(-4px)',
                    transition: 'all 0.3s ease',
                },
            }}
        >
            <CardMedia
                component="img"
                sx={{
                    width: '100%',
                    aspectRatio: '1/1', 
                    objectFit: 'cover',
                }}
                image={props.image}
                alt={props.name}
            />

            <Box sx={{ 
                p: 2,
                textAlign: 'center',
            }}>
                <Typography 
                    variant="h6" 
                    fontWeight="bold"
                    sx={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                    }}
                >
                    {props.name}
                </Typography>
            </Box>
        </Card>
    );
}