import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React, { FC, ReactNode } from "react";
import { useDispatch } from "react-redux";
import { IStudent } from "../../types";
import { remove } from "../../redux/features/student.slice";

interface Props {
   item: IStudent;
   children?: ReactNode;
}

const ImgMediaCard: FC<Props> = ({ item }) => {
   const dispatch = useDispatch();

   return (
      <>
         <Card sx={{ maxWidth: 345 }}>
            <CardMedia
               className='p-2'
               component='img'
               alt='green iguana'
               height='140'
               image={item.image}
            />
            <div className='flex flex-col'>
               <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                     {item.fname}
                  </Typography>
                  <Typography gutterBottom variant='h5' component='div'>
                     {item?.lname}
                  </Typography>
                  <Typography variant='body2'>{item.age}</Typography>
                  <Typography variant='body2'>{item.username}</Typography>
                  <Typography variant='body2'>{item.phonenumber}</Typography>
               </CardContent>
               <CardActions>
                  <div className='ml-auto'>
                     <Button color='success' size='small'>
                        Edit
                     </Button>
                     <Button onClick={() => dispatch(remove(item.id))} color='error' size='small'>
                        Delete
                     </Button>
                  </div>
               </CardActions>
            </div>
         </Card>
      </>
   );
};

export default React.memo(ImgMediaCard);
