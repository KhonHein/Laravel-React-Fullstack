import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
interface WhatIsType{
    id:number,
    logoText:string,
    question:string,
    published:string,
    image:string,
    outLines:string,
    header:string,
    description:string,
}
const WhatIs = (props:WhatIsType) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card 
    sx={{ 
      width: '100%' ,
      bgcolor:'#181D23',
      borderColor:'wheat',
      border:'solid 1px wheat',
      color:'white'
      }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: '#0F1924',border:'solid 1px red' }} aria-label="recipe">
            <Typography sx={{fontSize:'small'}}>{props.logoText}</Typography>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" sx={{color:'wheat'}}>
            <MoreVertIcon />
          </IconButton>
        }
        title={props.question}
        subheader={props.published}
        sx={{bgcolor:'#323436'}}
      />
      <CardMedia
        component="img"
        height="194"
        image={props.image}
        alt={props.question}
      />
      <CardContent>
        <Typography variant="body2" color="wheat">
         {props.outLines}
        </Typography>
      </CardContent>
      <CardActions disableSpacing >
        <IconButton aria-label="add to favorites" sx={{color:'white'}}>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share" sx={{color:'wheat'}}>
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          sx={{color:'wheat'}}
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{props.header}:</Typography>
          <Typography paragraph>{props.description}</Typography>       
        </CardContent>
      </Collapse>
    </Card>
  );
}
export default WhatIs