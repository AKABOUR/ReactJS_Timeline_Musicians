//Materia-UI 
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Musician = ( { musician }) => {
    return (
        <Grid item xs={12} md={3}  key={musician.id}>
            <Card>
                <CardActionArea>
                    <CardMedia className="img__musician"
                    image={musician.image}
                    title={musician.name}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {musician.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {musician.description.substring(0, 200)} ...
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <a href={musician.link} target="_blank">
                        <Button size="small" color="primary">
                        learn more
                        </Button>
                    </a>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default Musician;