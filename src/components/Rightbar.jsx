import React from 'react'
import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography } from '@mui/material'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

export const Rightbar = () => {
  return (
    <Box 
    flex={2} 
    p={2}
    mt={2}
    mb={2}
    sx={{display: {xs: "none", sm: "block"}}}
    >

        <Box positoin="fixed" width={300}>
            <Typography varient="h6" fontWeight={100}>Online friends</Typography>
            <AvatarGroup max={4}>
                <Avatar alt="" src="https://material-ui.com/static/images/avatar/1.jpg" />
                <Avatar alt="" src="https://material-ui.com/static/images/avatar/2.jpg" />
                <Avatar alt="" src="https://material-ui.com/static/images/avatar/3.jpg" />
                <Avatar alt="" src="https://material-ui.com/static/images/avatar/4.jpg" />
                <Avatar alt="" src="https://material-ui.com/static/images/avatar/5.jpg" />
            </AvatarGroup>

            <Typography varient="h6" fontWeight={100}>Latest photos</Typography>

            <ImageList cols={3} rowHeight={100} gap={5}>
                <ImageListItem>
                <img
                    src="https://material-ui.com/static/images/image-list/breakfast.jpg"
                    alt="Breakfast"
                />
                </ImageListItem>

                <ImageListItem>
                <img
                    src="https://material-ui.com/static/images/image-list/camera.jpg"
                    alt="Camera"
                />
                </ImageListItem>

                <ImageListItem>
                <img
                    src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c"
                    alt="Coffee"
                />
                </ImageListItem>

                <ImageListItem>
                <img
                    src="https://material-ui.com/static/images/image-list/honey.jpg"
                    alt="Honey"
                />
                </ImageListItem>
            </ImageList>


            <Typography varient="h6" fontWeight={100} mt={2}>Latest conversations</Typography>

            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                    <Avatar alt="" src="https://material-ui.com/static/images/avatar/5.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                    primary="Brunch this weekend?"
                    secondary={
                        <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            Ali Connors
                        </Typography>
                        {" — I'll be in your neighborhood doing errands this…"}
                        </React.Fragment>
                    }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                    <Avatar alt="" src="https://material-ui.com/static/images/avatar/6.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                    primary="Summer BBQ"
                    secondary={
                        <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            to Scott, Alex, Jennifer
                        </Typography>
                        {" — Wish I could come, but I'm out of town this…"}
                        </React.Fragment>
                    }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                    <Avatar alt="" src="https://material-ui.com/static/images/avatar/7.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                    primary="Oui Oui"
                    secondary={
                        <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            Sandra Adams
                        </Typography>
                        {' — Do you have Paris recommendations? Have you ever…'}
                        </React.Fragment>
                    }
                    />
                </ListItem>
            </List>


        </Box>
    </Box>
  )
}
