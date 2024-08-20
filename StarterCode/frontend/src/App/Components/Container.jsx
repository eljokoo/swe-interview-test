import react from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { DeleteTwoTone } from '@mui/icons-material';
import { Button, CardActionArea, CardActions } from '@mui/material';


function Container({ products, onDelete }) {
  return (
    <div className="container">
      {products.map((product) => (
        <Card sx={{ boxShadow: "1px 2px 4px rgba(0, 0, 0, 0.2)" }} key={product.id}>
          <CardActionArea>
            <CardMedia
              component="img"
              src={product.imageUrl}
              alt="Product Image"
              sx={{ objectFit: 'cover', width: 270, height: 180 }}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {product.name}
              </Typography>
              <Typography variant="body1">
                ${product.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <div className="delete">
            <CardActions>
              <Button size="small" color="error" onClick={() => onDelete(product.id)}>
                <DeleteTwoTone />
              </Button>
            </CardActions>
          </div>
        </Card>
      ))}

    </div>
  );
}

export { Container };
