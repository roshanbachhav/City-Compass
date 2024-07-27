import React, { Component } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import '../App.css';
import { Link } from "react-router-dom";

export default class PlacesData extends Component {
  render() {
    const { id , name, description, image, typeOf , location } = this.props;
    return (
      <Card sx={{ maxWidth: 345, margin: '20px auto' }}>
      <Link to={`/Places/location-view/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt={name}
            sx={{ padding: '10px', borderRadius: '8px' }}
          />
          <CardContent sx={{ padding: '16px' }}>
            <Typography gutterBottom variant="h5" component="div">
              {name.slice(0,25)+"..."}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                <span style={{ fontSize : "16px" , color: 'black' }}>Place Type:</span> {typeOf}
              </Typography>
            <Typography variant="body2" color="text.secondary">
                <span style={{ fontSize : "16px" , color: 'black' }}></span> {description}
              </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ marginTop: '8px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg> {location.slice(0, 30) + "..."}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
    );
  } 
}
