import React, { Component } from "react";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from "react-router-dom";

export default class FeaturedLocations extends Component {
  render() {
    const { id , name, image, typeOf , location } = this.props;
    return (
      <Card sx={{ maxWidth: 345, margin: "20px auto" }}>
        <Link to={`/Places/location-view/${id}`} style={{ textDecoration: "none", color: "inherit" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="190"
              image={image}
              alt={name}
              sx={{ padding: "10px", borderRadius: "8px" }}
            />
            <CardContent sx={{ padding: "16px" }}>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <span style={{ fontSize : "16px" , color: 'black' }}>Place Type:</span> {typeOf}
              </Typography>
              <Typography sx={{ margin: '5px 0'}} variant="body2" color="text.secondary">
              <span style={{ fontSize : "16px" , color: 'black' }}>Location:</span> {location.slice(0, 30) + "..."}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    );
  }
}
