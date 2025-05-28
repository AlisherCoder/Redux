import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React, { FC, ReactNode } from "react";
import { IUser } from "../../types";
import { useDeleteUserMutation } from "../../redux/api/user.api";
import { message } from "antd";

interface Props {
   item: IUser;
   children?: ReactNode;
}

const ImgMediaCard: FC<Props> = ({ item }) => {
   const [deleteUser, { isLoading }] = useDeleteUserMutation();

   const handleDelete = (id: number) => {
      deleteUser(id)
         .unwrap()
         .then(() => succes());
   };

   const [messageApi, contextHolder] = message.useMessage();

   const succes = () => {
      messageApi.open({
         type: "success",
         content: "Deleted user successfully",
      });
   };

   return (
      <>
         {contextHolder}
         <Card sx={{ maxWidth: 345 }}>
            <CardMedia
               component='img'
               alt='green iguana'
               height='140'
               image={item.image}
               loading='lazy'
            />
            <div className=''>
               <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                     {item.fname}
                  </Typography>

                  <Typography gutterBottom variant='h5' component='div'>
                     {item?.lname}
                  </Typography>

                  <Typography variant='body2'>{item.age} years old</Typography>

                  <Typography variant='body1'>{item.city}</Typography>
               </CardContent>

               <CardActions>
                  <div className='ml-auto'>
                     <Button color='success' size='small'>
                        Edit
                     </Button>

                     <Button
                        onClick={() => handleDelete(item.id)}
                        loading={isLoading}
                        color='error'
                        size='small'
                     >
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
