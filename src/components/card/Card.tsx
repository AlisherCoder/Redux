import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { FC, ReactNode } from "react";
import { useDispatch } from "react-redux";
import { addWishlist, remove } from "../../redux/features/eletronics.slice";
import { IElectronic } from "../../types";

interface Props {
   item: IElectronic;
   children?: ReactNode;
}

const ImgMediaCard: FC<Props> = ({ item }) => {
   const dispatch = useDispatch();

   return (
      <>
         <Card sx={{ maxWidth: 345 }}>
            <CardMedia component='img' alt='green iguana' height='140' image={item.image} />
            <CardContent>
               <Typography gutterBottom variant='h5' component='div'>
                  {item.name}
               </Typography>
               <Typography gutterBottom variant='h5' component='div'>
                  $ {item.price}
               </Typography>
               <Typography variant='body2' sx={{ color: "text.secondary" }}>
                  {item.count}
               </Typography>
            </CardContent>
            <CardActions>
               <Button onClick={() => dispatch(addWishlist(item))} size='small'>
                  Saved
               </Button>
               <Button color='success' size='small'>
                  Edit
               </Button>
               <Button onClick={() => dispatch(remove(item.id))} color='error' size='small'>
                  Delete
               </Button>
            </CardActions>
         </Card>
      </>
   );
};

export default ImgMediaCard;
