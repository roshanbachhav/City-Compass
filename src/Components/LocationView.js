import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Grid, Rating } from "@mui/material";
import { BookOpen, BookType, LandPlot, MapPinned, SatelliteDish } from "lucide-react";
import { BarLoader } from "react-spinners";
const LocationView = () => {
  const { id } = useParams();
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLocationData = async () => {
      try {
        const response = await fetch(
          `https://rest-api-production-ee75.up.railway.app/api/data/${id}`
        );
        if (!response.ok) throw new Error("Network response was not ok.");
        const data = await response.json();
        setLocation(data.place);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setLoading(false);
      }
    };
    fetchLocationData();
  }, [id]);

  if (loading) return(
    <div className="barloader mt-5 container d-flex justify-content-center" style={{minHeight: '50vh'}}>
      <BarLoader width={200} />
    </div>
  ) ;
  if (!location) return <p>No data available.</p>;

  const {
    name,
    description,
    image,
    typeOf,
    rating,
    state,
    city,
    location: loc,
  } = location;

  return (
    <>
      <Box sx={{ padding: 4, minHeight: '50vh' }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardMedia
                component="img"
                height="418"
                image={image}
                alt="Location Image"
                sx={{ objectFit: "cover" }}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>

                {/* Title */}
                <Typography
                  variant="h4"
                  component="div"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  {name}
                </Typography>

                {/* Rating */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 2,
                  }}
                >
                  <Rating
                    value={rating}
                    precision={0.5}
                    readOnly
                    style={{
                      color: "gold",
                    }}
                    icon={<span style={{ color: "gold" }}>★</span>}
                    emptyIcon={<span style={{ color: "lightgray" }}>★</span>}
                  />
                  <Typography variant="body2" sx={{ marginLeft: 1 , marginTop: 1 , fontSize: '12px'}}>
                    41 reviews
                  </Typography>
                </Box>
                
                {/* Type Of */}
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ marginBottom: 2 }}
                >
                  <BookType /> <strong>{typeOf}</strong>
                </Typography>

                {/* State */}
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ marginBottom: 2 }}
                >
                  <SatelliteDish /> <strong>{state}</strong>
                </Typography>

                {/* City */}
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ marginBottom: 2 }}
                >
                  <LandPlot /> <strong>{city}</strong>
                </Typography>

                {/* Location */}
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ marginBottom: 2 }}
                >
                  <MapPinned /> <strong>{loc}</strong>
                </Typography>

                {/* Description */}
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ marginTop: 4 }}
                >
                  <BookOpen /> <strong>{description}</strong>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default LocationView;
